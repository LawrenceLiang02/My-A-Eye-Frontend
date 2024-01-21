import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as styles from "./webcam.module.css";
import { started } from "../../models/started";
import { Image } from "../../models/image";
const dataURItoBlob = (dataURI: string): Blob => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: mimeString });
};

interface CameraProps {
  isShowVideo: boolean;
  updateImages: (newValue: Image[]) => void;
  performCapture: boolean;
  stopCapture: () => void;
}

const Camera: React.FC<CameraProps> = ({
  isShowVideo,
  performCapture,
  updateImages,
  stopCapture,
}) => {
  const webcamRef = useRef<Webcam | null>(null);
  useEffect(() => {
    if (performCapture) {
      capture();
    }
  });
  const capture = React.useCallback(async () => {
    const capturedImages: string[] = []; //to send to backend

    // Capture 10 screenshots in sequence
    for (let i = 0; i < 1; i++) {
      const imageSrc = webcamRef.current?.getScreenshot();

      if (imageSrc !== undefined && imageSrc !== null) {
        const base64_data = imageSrc.split(";base64,")[1];
        capturedImages.push(base64_data);

        const blob = dataURItoBlob(imageSrc);

        // Create a download link (testing if images works)
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "captured_photo.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      // Delay between captures, can be adjusted
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed
    }
    updateImages(capturedImages);
    stopCapture();
  }, [webcamRef]);

  return (
    <>
      <div className="w-auto h-full bg-black">
        {!isShowVideo ? (
          <div></div>
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            mirrored={true}
            screenshotFormat="image/jpeg"
            className="w-auto h-full"
          />
        )}
      </div>
    </>
  );
};

export default Camera;
