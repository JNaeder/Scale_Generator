import {Note, Key} from "@tonaljs/tonal";

// Document Stuff
const generateButton = document.getElementById("generate_button");
const scaleOutput = document.getElementById("output");
const notesCheckbox = document.getElementById("note-names");
const rhythmCheckbox = document.getElementById("rhythm");
const playingStyleCheckbox = document.getElementById("playing-style");

// Scale Variables
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const signs = ['♮', '♭', '♯'];
const modes = ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor', 'Locrian', 'Minor Pentatonic', 'Major Pentatonic', 'Major Triad Arpeggio', 'Minor Triad Arpeggio', 'Dom7 Arpeggio']
const rhythm = ['16ths', '8ths', 'Triplets', 'Sectuplets'];
const style = ['Straight'];

// Event Listeners
generateButton.addEventListener('click', makeNewScale);

// Functions

function makeNewScale(){
    const randomKey = notesCheckbox.checked ? createRandom(keys) : "";
    const randomSign = notesCheckbox.checked ? createRandom(signs) : "";
    const randomMode = createRandom(modes);
    const randomRhythm = rhythmCheckbox.checked ? ` - ${createRandom(rhythm)}` : "";
    scaleOutput.innerHTML = `${randomKey}${randomSign} ${randomMode}${randomRhythm}`;

    console.log(Key.majorKey(`${randomKey}`));
}

function createRandom(item){
    return item[Math.trunc(Math.random() * item.length)];
}