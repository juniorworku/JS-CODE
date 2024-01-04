function speak() {
    var input =  document.getElementById('textArea').value;
   
    //const text = input.value;
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(input);
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[2]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }