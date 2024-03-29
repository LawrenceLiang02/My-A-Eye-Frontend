import "./App.css";
import * as Components from "./components/index";
import React, { useRef, useState, useEffect } from "react";
import { ConversationBody } from "./models/conversationbody";
import { Message } from "./models/message";
import { Image } from "./models/image";
import { formatToConversationCell } from "./utils/stringUtil";
import { MicButton } from "./components/MicButton";
import axios from "axios";
import { ConversationPayload } from "./models/ConversationPayload";

const API = "http://127.0.0.1:5000/api";

function App() {
  const [started, setStarted] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isMicRecording, setIsMicRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const [conversationImages, setImages] = useState<Image[]>([]);
  const [conversationMsgs, setMsgs] = useState<Message[]>([]);
  const [performCapture, setPerformCapture] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<Message | null>(null);
  const [currentReply, setCurrentReply] = useState<Message | null>(null);
  const [disableInputs, setDisableInputs] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer if the component unmounts or if you want to cancel the animation for some reason
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDone(true);
    }, 4000);

    // Clear the timer if the component unmounts or if you want to cancel the animation for some reason
    return () => clearTimeout(timer);
  }, []);

  function logsClick() {
    setIsLogOpen(!isLogOpen);
  }

  const updateImages = (newImages: Image[]) => {
    setImages(newImages);
    // testing tts
    // const msg: Message = {
    //   role: "user",
    //   text: "bob"
    // }
    // setCurrentReply(msg)
  };

  const handleNewConvo = () => {
    setPerformCapture(true);
    setImages([]);
    setMsgs([]);
    setCurrentPrompt(null);
    setCurrentReply({
      role: "assistant",
      text: "Hi! I am A-Eye, how can I help you?",
    });
    // const msg: Message = {
    //   role: "assistant",
    //   text: "bob"
    // }
    // updateCurrentMsg(msg);
  };

  const stopCapture = () => {
    setPerformCapture(false);
  };

  // Used to set new prompt by user OR to pass new reply to TTS
  const updateCurrentMsg = (newMsg: Message) => {
    setCurrentPrompt(newMsg);
    if (
      conversationImages !== undefined &&
      conversationImages !== null &&
      conversationImages.length > 0
    ) {
      createConversationBody();
    }
  };

  const handleReceivedPayload = (payload: ConversationPayload) => {
    const userMsg: Message = {
      role: "user",
      text: payload.user,
    };

    const assistantMsg: Message = {
      role: "assistant",
      text: payload.message,
    };

    setMsgs((prevMsgs) => [...prevMsgs, userMsg, assistantMsg]);

    setCurrentReply(assistantMsg);
  };

  const createConversationBody = () => {
    const conversation: ConversationBody = {
      pastMessages: conversationMsgs,
      currentMessage: currentPrompt!,
      images: conversationImages,
    };

    return conversation;
  };

  const ProcessMessage = async (conversation: ConversationBody) => {
    let url = `${API}/eye`;

    await axios
      .post(url, conversation)
      .then((res) => {
        // console.log(`got response ${res.data}`)
        handleReceivedPayload(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (
      conversationImages !== undefined &&
      conversationImages !== null &&
      conversationImages.length > 0
    ) {
      const body = createConversationBody();

      // console.log(`sending with body ${body}`)

      ProcessMessage(body);
    }
  }, [currentPrompt]);

  // console.log(currentReply)

  return (
    <>
      <div
        className={`${!isLoading ? "animate-fadeOut" : ""}  ${isLoadingDone ? "hidden" : ""} absolute w-screen min-h-screen h-full bg-white z-40 flex flex-col items-center justify-center space-y-8`}
      >
        <div
          className={`animate-loading w-full h-96 bg-no-repeat bg-center`}
        ></div>
        <div className="flex flex-col items-center justify-center">
          <div className={`text-5xl uppercase font-semibold`}>My A-Eye</div>
          <div className={`text-3xl uppercase font-semibold`}>
            For ConUHacksVIII
          </div>
        </div>
      </div>

      {/* <div */}
      {/*   className={`${displayPopUp ? " animate-fadeIn " : "hidden"} absolute w-full h-auto left-0 top-0 flex flex-row items-center justify-around py-4`} */}
      {/* > */}
      {/*   {currentReply && ( */}
      {/*     <Components.PopUpComp */}
      {/*       role={currentReply.role} */}
      {/*       text={currentReply.text} */}
      {/*     ></Components.PopUpComp> */}
      {/*   )} */}
      {/* </div> */}

      <div className="overscroll-none overflow-hidden flex flex-row max-h-screen h-screen max-w-screen w-screen bg-red-500 py-10 px-8 bg-stripes space-x-8">
        <div
          className={`flex flex-row justify-around w-full h-full bg-black rounded-lg border-8 ${started ? `border-red-600 animate-blinkingRecording ` : `border-white`}`}
        >
          <div
            className={`${started ? `` : `hidden`} h-full w-auto bg-black rounded-lg`}
          >
            <Components.Camera
              isShowVideo={started}
              performCapture={performCapture}
              updateImages={updateImages}
              stopCapture={stopCapture}
            />
          </div>
          <div
            className={`${started ? `hidden` : ``}  w-full h-full bg-zig-zag flex flex-col items-center justify-around text-red-800 py-32 space-y-2 rounded-lg `}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-full h-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                />
              </svg>
            </div>

            <div className="text-5xl font-bold uppercase">
              <p>Offline</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 justify-between py-10">
          <div className="flex flex-col space-y-4">
            <button
              className={`button-div ${started ? `  border-8 border-green-700 text-green-700` : ``} hover:border-opacity-80 hover:border-4 border-green-700 hover:text-green-700`}
              onClick={() => setStarted(!started)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="w-full h-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                />
              </svg>
              <p className="button-text">Power</p>
            </button>

            <button
              className={`button-div ${isLogOpen ? `  border-8 border-blue-600 text-blue-600` : ``} hover:border-opacity-80 hover:border-4 border-blue-700 hover:text-blue-700`}
              onClick={logsClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-full h-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <p className="button-text">Logs</p>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <MicButton
              updateCurrentMsg={updateCurrentMsg}
              isMicRecording={isMicRecording}
              setIsMicRecording={setIsMicRecording}
              cameraHasStarted={started}
              disabled={disableInputs}
            />

            <button
              className="button-div"
              onClick={handleNewConvo}
              disabled={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-full h-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <p className="button-text">New</p>
            </button>
          </div>
        </div>

        <div
          className={`z-30 flex flex-col items-start justify-end h-full absolute inset-y-0 w-96 min-h-screen py-16 right-0 transform duration-700 ease-out overscroll-none overflow-hidden ${isLogOpen ? "-translate-x-40" : "translate-x-full"}`}
        >
          <div className=" flex flex-col justify-start items-start w-full h-full bg-white rounded-lg">
            <div className="flex flex-col w-full justify-center items-center h-4">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg> */}
            </div>
            <div className="overflow-y-scroll w-full h-auto">
              <div className={`table-item bg-slate-200`}>
                {formatToConversationCell({
                  role: "assistant",
                  text: "Hi! I am A-Eye, how can I help you?",
                })}
              </div>
              {conversationMsgs.map((msg, index) => (
                <div
                  key={index}
                  className={`table-item ${index % 2 === 1 ? "bg-slate-200" : "bg-slate-300"}`}
                >
                  {formatToConversationCell(msg)}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full justify-center items-center h-4">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <Components.TextToSpeech reply={currentReply} />
    </>
  );
}

export default App;
