import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import * as Components from './components/index'
// import stopRecording from './components/stt/AudioRecorder'

function App() {
  const [started, setStarted] = useState(false);
  const [recording, setRecording] = useState(false);
  //   const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  
    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
  
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };
  
        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const formData = new FormData();
          console.log(audioBlob);
          formData.append('audio', audioBlob, 'recording.wav');
  
      //     setAudioBlob(audioBlob);
  
      // // Save the Blob locally using FileSaver
      // saveAs(audioBlob, 'downloaded_audio.wav');
  
          try {
            // Send the audio data to the server using Axios
            await axios.post('http://127.0.0.1:5000/record', formData, {
              headers: {
                'Content-Type': 'audio/wav',
              },
            });
  
            console.log('Audio uploaded successfully');
  
  
          } catch (error) {
            console.error('Error uploading audio:', error);
          }
  
          // Clear recorded audio chunks for the next recording
          audioChunksRef.current = [];
        };
  
        mediaRecorderRef.current.start();
        setRecording(true);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };
  
    const stopRecording = () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
        setRecording(false);
      }
    };

  return (
    <>
      <div className='flex flex-row max-h-screen h-screen max-w-screen w-screen bg-red-500 py-10 px-8 bg-stripes space-x-8'>
        <div className='flex flex-row justify-around w-full h-full bg-black rounded-lg border-8 border-white '>
          <div className={`${started ? ``: `hidden`} h-full w-auto bg-black rounded-lg`}>
            <Components.Camera/>
          </div>
          <div className={`${started ? `hidden`: ``}  w-full h-full bg-zig-zag flex flex-col items-center justify-around text-red-800 py-32 space-y-2 rounded-lg `}>
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-full h-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
              </svg>
            </div>
            
            <div className='text-5xl font-bold uppercase'>
              <p>Offline</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-4 justify-between py-10'>
          <div className='flex flex-col space-y-4'>
            <button className='button-div'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
              </svg>

            </button>

            <button className='button-div'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </button>
          </div>

          <div className='flex flex-col space-y-4'>

          {recording ? (
         <button onClick={stopRecording} className='button-div'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          </button>
        ) : (
          <button onClick={startRecording} className='button-div'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          </button>
        )} 


          </div>
          
        </div>
      </div>
    </>
    
  );
}

export default App;