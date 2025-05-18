import Character from "./character.js"

var inventory = ['flower']
const Jet = new Character("Jethro", "Light Blue", inventory, "./images/Jet.png");
Jet.generateCharacter();
Jet.speak("Sup yo");