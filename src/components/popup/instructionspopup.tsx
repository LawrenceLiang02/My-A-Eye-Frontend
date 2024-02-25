import { useEffect, useState } from 'react'

function InsrtuctionsPopUp({ state }: { state: boolean }) {

  const [anim, setAnim] = useState(" hidden ");

    useEffect(() => {
      if (state == false) {
        setAnim(' animate-fadeOut3 ')
        const timeout = setTimeout(() => {
          setAnim('hidden');
        }, 1000);
  
        return () => clearTimeout(timeout);
      }

    }, [state]);
    
    return (
        <div className={`${state ? "  animate-fadeIn3 " : anim} absolute w-full h-full left-0 top-0 flex flex-row items-center justify-around bg-white bg-opacity-70 z-20`}>
          <div className="flex flex-row justify-around items-start h-auto w-auto space-x-3 z-40">
            <div className="h-auto w-full py-12 px-16 flex flex-col items-start justify-left bg-white rounded-2xl drop-shadow-2xl px-8 py-4 bg-opacity-100 space-y-8">
              <div className="flex flex-col items-left justify-center space-y-8">
              <h2 className="text-4xl font-semibold">Instructions</h2>
              
              <p className='text-xl'>The idea of this interface is like a prototype of a camera used by blind people.</p>

              
              <div>
                <h4 className="text-2xl font-semibold">Buttons:</h4>

                <div className='instruction-button-parent'>
                  <div
                  className={`flex flex-col items-center justify-around rounded-full bg-white w-24 h-24 p-4 text-center`} >
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
                  </div>
                  <p className='text-xl '>Toggle to power on the camera.</p>
                </div>
                
                <div className='instruction-button-parent'>
                  <div
                  className={`flex flex-col items-center justify-around rounded-full bg-white w-24 h-24 p-4 text-center`} >
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
                  </div>

                  <p className='text-xl '>Toggle to view the chat logs between human and bot.</p>
                </div>
                
                <div className='instruction-button-parent'>
                  <div
                  className={`flex flex-col items-center justify-around rounded-full bg-white w-24 h-24 p-4 text-center`} >
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
                  </div>

                  <p className='text-xl '>Click to capture a new picture and start a new conversation.</p>
                </div>
                

                <div className='instruction-button-parent'>
                  <div
                  className={`flex flex-col items-center justify-around rounded-full bg-white w-24 h-24 p-4 text-center`} >
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
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                      />
                    </svg>
                    <p className="button-text">Mic</p>
                  </div>

                  <p className='text-xl '>Toggle to record audio.</p>
                </div>
                
              </div>
            </div>
            </div>

          </div>
            {/* <button className=" bg-red-500 rounded-full p-1 hover:scale-[115%]  ease-in-out duration-200 transition-all" onClick={closePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          

        </button> */}
        </div>
        
    )
}

export default InsrtuctionsPopUp