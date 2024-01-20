import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const dataURItoBlob = (dataURI: string): Blob => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: mimeString });
}; 
 
const Camera = () => {
  const webcamRef = useRef<Webcam | null>(null);

  const capture = React.useCallback(async () => {
    const capturedImages: string[] = []; //to send to backend

    // Capture 10 screenshots in sequence
    for (let i = 0; i < 10; i++) {
      const imageSrc = webcamRef.current?.getScreenshot();

      if (imageSrc !== undefined && imageSrc !== null) {
        capturedImages.push(imageSrc);
        const blob = dataURItoBlob(imageSrc);
  
        // Create a download link (testing if images works)
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'captured_photo.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      // Delay between captures, can be adjusted
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed
    }
   
  }, [webcamRef]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture 10 photos</button> 
      {/* button to be removed */}
    </>
  );
};

export default Camera;