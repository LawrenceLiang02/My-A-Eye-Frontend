import React, { useEffect, useState } from "react";
import { Message } from "../../models/message";

function PopUp() {

  const [displayPopUp, setDisplayPopUp] = useState(true);
  const [anim, setAnim] = useState(" animate-fadeOut ");

  useEffect(() => {
    if (displayPopUp == false) {
      const timeout = setTimeout(() => {
        setAnim('hidden');
      }, 1990);

      return () => clearTimeout(timeout);
    }
  }, [displayPopUp]);


  function closePopup() {
    setDisplayPopUp(false);
  }

  
  
  return (
    // px-[20%] py-[5%]
    <div className={`${displayPopUp ? " " : anim} absolute w-full h-full left-0 top-0 flex flex-row items-center justify-around bg-white bg-opacity-70 z-20`}> 
      <div className="flex flex-row justify-around items-start h-auto w-auto space-x-3 z-40">
        <div className="h-auto w-full py-12 px-16 flex flex-col items-start justify-left bg-white rounded-2xl drop-shadow-2xl px-8 py-4 bg-opacity-100 space-y-8">
          <div className="flex flex-col items-left justify-center space-y-8">
            <h2 className="text-4xl font-semibold">Welcome to the Demo Page for My A-EyE</h2>
            <p className="popUp-title">
              This project was created for the ConUHacksVIII Hackathon during the weekend of January 20-21, 2024.
            </p>

            <div className="flex flex-col items-left justify-center">
              <p className="popUp-title">
                Due to expensive hosting fees, we are unable to host the AI back-end continously.
              </p>

              <p className="popUp-title">
              Hence why we have hard coded certain dialogs.
              </p>
            </div>

            <div className="flex flex-col items-left justify-center space-y-2">
              <h2 className="text-2xl font-semibold">Here is how to locate certain useful tools: </h2>
              <div className="flex flex-row space-x-2">
                <p className="popUp-title">📚 Instructions & Help: </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6 rounded-full border-2 border-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>

              <div className="flex flex-row space-x-2">
                <p className="popUp-title">🔍 Developer Credits: </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 rounded-full border-2 border-black">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
            </div>

            
            <p className="popUp-title"> If you have any further questions or feedback, don't hesitate to reach out to us. Enjoy exploring!</p>
            
          </div>
          

          <div className="flex flex-col items-left">
            <p className="popUp-title">
            Your understanding is appreciated, coordially
            </p>

            <p className="popUp-title font-semibold">
            - the dev team
            </p>
          </div>
          
        </div>

        <button className=" bg-red-500 rounded-full p-1 hover:scale-[115%]  ease-in-out duration-200 transition-all" onClick={closePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

        </button>
      </div>
      
    </div>
    
  );
}

export default PopUp;
