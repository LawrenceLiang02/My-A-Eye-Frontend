import React, { useState, useEffect, FC } from "react";
import { Message } from "../../models/message";
interface TextToSpeechProps {
  reply: Message | null;
}

const TextToSpeech: FC<TextToSpeechProps> = ({ reply }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (reply != null) {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(reply.text);
    
        setUtterance(u);
    
        return () => {
          synth.cancel();
        };
    }
    
  }, [reply]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (utterance) {
        if (isPaused) {
          synth.resume();
        }
    
        synth.speak(utterance);
    
        setIsPaused(false);
      }
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
    </div>
  );
};

export default TextToSpeech;
