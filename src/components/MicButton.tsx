import { useEffect } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Message } from '../models/message';


const blobToBase64 = (blob: Blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

type MicButtonProps = {
  setNewUserMsg: (m: Message) => void
  isMicRecording: boolean
  setIsMicRecording: any
  cameraHasStarted: boolean
  handleNewConvo: () => void
  disabled: boolean
}

export const MicButton = (props: MicButtonProps) => {

  const {
    startRecording,
    stopRecording,
    recordingBlob,
  } = useAudioRecorder();

  const handleClick = () => {
    if (!props.isMicRecording) {
      console.log("recording now")
      startRecording()
      props.setIsMicRecording(true)
    }
    else {
      stopRecording()
      props.setIsMicRecording(false)
    }
  }


  useEffect(() => {
    if (!recordingBlob) return;

    blobToBase64(recordingBlob).then(res => {
      if (typeof res !== "string") return;

      const base64 = res.split(',')[1]

      console.log(base64);

      props.setNewUserMsg({
        'role': 'user',
        'text': base64
      })
    });
    ;

  }, [recordingBlob])

  return (<>
    <button className={`button-div ${props.isMicRecording && props.cameraHasStarted ? ' border-8 border-red-600 text-red-600 animate-blinkingRecording' : ''}`} onClick={handleClick} disabled={props.disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-auto">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
      <p className='button-text'>Mic</p>
    </button>
  </>)
}
