import React, { useState, useRef } from 'react';
import axios from 'axios';
// import { saveAs } from 'file-saver';

const AudioRecorder = () => {
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
              'Content-Type': 'multipart/form-data',
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

  // return (
  //   <div>
  //     <h2>Audio Recorder</h2>
  //     <p>{recording ? 'Recording...' : 'Click to start recording'}</p>
  //     {recording ? (
  //       <button onClick={stopRecording}>Stop Recording</button>
  //     ) : (
  //       <button onClick={startRecording}>Start Recording</button>
  //     )}
  //   </div>
  // );
};



export default AudioRecorder;

