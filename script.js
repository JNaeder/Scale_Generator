// Document Stuff
const generateButton = document.getElementById("generate_button");
const scaleOutput = document.getElementById("output");

// Scale Variables
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const signs = ['♮', '♭', '♯'];
const modes = ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor', 'Locrian', 'Minor Pentatonic', 'Major Pentatonic']
const rhythm = ['16ths', '8ths', 'Triplets', 'Sectuplets'];
const style = ['Straight'];

// Event Listeners
generateButton.addEventListener('click', makeNewScale);

// Functions

function makeNewScale(){
    const randomKey = createRandom(keys);
    const randomSign = createRandom(signs);
    const randomMode = createRandom(modes);
    const randomRhythm = createRandom(rhythm);
    scaleOutput.innerHTML = `${randomKey}${randomSign} ${randomMode} ${randomRhythm}`;
}

function createRandom(item){
    return item[Math.trunc(Math.random() * item.length)];
}