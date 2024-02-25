import { useEffect, useState } from 'react'

function DevPopUp({ state }: { state: boolean }) {
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
    <div className={`${state ? " animate-fadeIn3 " : anim} absolute w-full h-full left-0 top-0 flex flex-row items-center justify-around bg-white bg-opacity-70 z-20`}>
        <div className="flex flex-row justify-around items-start h-auto w-auto space-x-3 z-40">
            <div className="h-auto w-full py-12 px-16 flex flex-col items-start justify-left bg-white rounded-2xl drop-shadow-2xl px-8 py-8 bg-opacity-100 space-y-8">
                <div className="flex flex-col items-left justify-center space-y-16">
                    <h2 className="text-4xl font-semibold capitalize text-center">Go follow our devs!</h2>
                
                    <div className='flex flex-row items-center justify-around space-x-16'>
                        <div className='dev-parent'>
                            <a href="https://www.linkedin.com/in/lawrence-liang-b19a3b199/">
                                <img className='dev-icon' src={window.location.origin + '/image/lawrence_linkedin.jpg'} alt="Lawrence Liang" />
                                <p className="dev-name">Lawrence Liang</p>
                            </a>
                            

                            <div className='dev-links'>
                                <a className='dev-link' href="https://www.linkedin.com/in/lawrence-liang-b19a3b199/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <p>LinkedIn</p>
                                </a>
                                <a className='dev-link' href="https://github.com/LawrenceLiang02">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>

                        <div className='dev-parent'>
                            <a href="https://www.linkedin.com/in/kenny-luo-li-10aa44199/">
                                <img className='dev-icon' src={window.location.origin + '/image/kenny_linkedin.jpg'} alt="Kenny Luo-Li" />
                                <p className="dev-name">Kenny Luo-Li</p>
                            </a>
                            

                            <div className='dev-links'>
                                <a className='dev-link' href="https://www.linkedin.com/in/kenny-luo-li-10aa44199/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <p>LinkedIn</p>
                                </a>
                                <a className='dev-link' href="https://github.com/Kenny-star">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>

                        <div className='dev-parent'>
                            <a href="https://www.linkedin.com/in/wu-simon/">
                                <img className='dev-icon' src={window.location.origin + '/image/simon_linkedin.jpg'} alt="Simon Wu" />
                                <p className="dev-name">Simon Wu</p>
                            </a>

                            <div className='dev-links'>
                                <a className='dev-link' href="https://www.linkedin.com/in/wu-simon/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <p>LinkedIn</p>
                                </a>
                                <a className='dev-link' href="https://github.com/siwuagain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>

                        <div className='dev-parent'>
                            <a href="https://www.linkedin.com/in/zhang-sam/">
                                <img className='dev-icon' src={window.location.origin + '/image/sam_linkedin.jpg'} alt="Sam Zhang" />
                                <p className="dev-name">Sam Zhang</p>
                                
                            </a>

                            <div className='dev-links'>
                                <a className='dev-link' href="https://www.linkedin.com/in/zhang-sam/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <p>LinkedIn</p>
                                </a>
                                <a className='dev-link' href="https://github.com/SamZhang02">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevPopUp