import { useState, useEffect, FC } from "react";
import { Message } from "../../models/message";

interface TextToSpeechProps {
  reply: Message | null;
}

const TextToSpeech: FC<TextToSpeechProps> = ({ reply }) => {
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  );
  console.log(reply)

  useEffect(() => {
    if (!reply) return;

    const synth = window.speechSynthesis;

    const speakWithVoice = (voices: any, text: any) => {
      const voice = voices.find((v: SpeechSynthesisVoice) => v.name === 'Nicky');
      const u = new SpeechSynthesisUtterance(text);

      if (voice) {
        u.voice = voice;
      } else {
        console.error('Nicky voice not found');
      }

      setUtterance(u);

      if (u) {
        synth.speak(u);
      }
    }


    // Wait until the voices are loaded
    let voices = synth.getVoices();
    if (voices.length === 0) {
      synth.addEventListener('voiceschanged', () => {
        voices = synth.getVoices();
        speakWithVoice(voices, reply.text);
      });
    } else {
      speakWithVoice(voices, reply.text);
    }

    return () => {
      synth.cancel();
    };
  }, [reply]);
  return <div></div>;
};

export default TextToSpeech;
