//Gives function to class="talk" class="content"
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'I am doing good',
    'Doing very well',
    'Have been amazing',
];
const weather = [ 
    'Weather is fine',
    'Not too cold out',
];

// Establish Recognition 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated ,you can to microphoneee');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the btn 

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I do not know what you said';//what is said back
    if(message.includes('how are you')){
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text= finalText;
    }
    speech.volume = 1;
    speech.rate = 1; //speed spoken
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}