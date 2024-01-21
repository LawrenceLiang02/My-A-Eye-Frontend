import React, { useState, useEffect, FC } from "react";
import { Message } from "../../models/message";
interface TextToSpeechProps {
  reply: Message | null;
}

const TextToSpeech: FC<TextToSpeechProps> = ({ reply }) => {
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (reply != null) {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(reply.text);
    
        setUtterance(u);
        
        if (u) {
          synth.speak(u);
        }
        
        return () => {
          synth.cancel();
        };
    }
    
  }, [reply]);

  return (
    <div>
    </div>
  );
};

export default TextToSpeech;
