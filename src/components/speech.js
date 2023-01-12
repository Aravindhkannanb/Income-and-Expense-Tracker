import React from "react";
import {BsFillMicFill} from 'react-icons/bs';
import {BsFillMicMuteFill} from 'react-icons/bs';
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
 
const App = () => {
  const { transcript,resetTranscript} = useSpeechRecognition({
    continuous: true
  });
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
 console.log(transcript);
  return (
    <div>
    <BsFillMicFill onClick={SpeechRecognition.startListening}></BsFillMicFill>
     <BsFillMicMuteFill onClick={SpeechRecognition.stopListening}></BsFillMicMuteFill>
     <p>{transcript}</p>
    </div>
  );
};
export default App;