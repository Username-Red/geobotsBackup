import Character from "./character.js";
import Choice from "./choice.js";

var options = ['yes', 'no'];
var inventory = ['sand', 'lucky shell'];
const Lucy = new Character("Lucy", "Lime", inventory, "./images/Lucy.png");
Lucy.generateCharacter();
Lucy.speak("Hey there, need a hand?");
var answer = await Choice(options);
if (answer == 'yes') {
    Lucy.speak("Let me help you up!");
} 
else if (answer == 'no') {
    Lucy.speak("cool stuff, get up");
}