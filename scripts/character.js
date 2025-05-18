export default class Character {
    constructor(name, color, inventory, image) {
        this.name = name;
        this.color = color;
        this.inventory = inventory;
        this.image = image;
    }

    speak(dialogue) {
        const speechBubble = document.querySelector('#dialogue-text');
        //speechBubble.color() = this.color;
        speechBubble.textContent = dialogue;
    }

    generateCharacter() {
        document.querySelector(".character").src = this.image;
        document.querySelector(".character").classList.remove("invisible");
    }
    vanishCharacter() {
        document.querySelector(".character").classList.add("invisible");
    }

    give(item, target) {
        target.inventory.push(item);
    }
    
}