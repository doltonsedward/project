// Convert text ke suara
const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "id-ID";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1; // masih bisa diubah dari 0 - 2
  synth.speak(voice);
}