import Choice from "./choice.js";
import Character from "./character.js";
import { Item } from "./item.js";

// items
const luckyShell = new Item("Lucky Shell", "###", "A small shell that Lucy picked up from the shores of Wendigo Lake.");
const sand = new Item("Sand", "###", "A small pile of sand from the shores of Wendigo Lake. I should throw it at something.");
const flower = new Item("Flower", "../images/happyFlower.png", "A pretty little flower from the Wondering Woods. Jet says that flowers are the key to things.");
const angryStone = new Item("Angry Rock", "./images/angry-stone.png", "A rock with an angry face. Sebastian likes throwing these kinds of rocks into the lava pools. Maybe I should throw it at something else?");
const lightCrystal = new Item("Lights Crystal", "./images/lightstone.png", "A crystal that can light up even the darkest places. I wonder how to turn it off...?");

// Characters
const Lucy = new Character("Lucy", "Lime", [sand, luckyShell], "./images/Lucy.png");
const Jet = new Character("Jethro", "Light Blue", [flower], "./images/Jet.png");
const Sebastian = new Character("Sebastian", "Darkred", [angryStone], "./images/Sebastian.png");
const Kris = new Character("Kris", "Blue", [lightCrystal], "./images/Kris.png");
const narrator = new Character("Narrator", "white", [], "###");
const player = new Character("", "", [], "");

// scenes
export const scenes = {
    intro: {
        background: "blank.webp",
        dialogue: [
            {speaker: narrator, text: "Welcome... (click/tap to continue)"},
            {speaker: narrator, text: "What is your name?"}
        ],
        choices: ["__input__"],
        next: (name) => {
            localStorage.setItem("playerName", name); 
            player.name = name;
            return "nameAccepted";
        },
    },
    nameAccepted: {
        background: "blank.webp",
        dialogue: [
            {speaker: narrator, text: `${localStorage.getItem("playerName")}`},
            {speaker: narrator, text: `Welcome to your adventure, ${localStorage.getItem("playerName")}.`},
            {speaker: narrator, text: `Explore everything you can. Make friends. Remember who you are.`},
            {speaker: narrator, text: `Remember, ${localStorage.getItem("playerName")}.`},
            {speaker: narrator, text: `${localStorage.getItem("playerName")}...`},
            {speaker: narrator, text: `${localStorage.getItem("playerName")}...?`},
            {speaker: narrator, text: `${localStorage.getItem("playerName")}...!`},
        ],
        choices: [],
        next: () => "lucyWakesYouUp",

    },
    lucyWakesYouUp: {
        background: "lakeLucy.png",
        dialogue: [
            {speaker: Lucy, text: `${localStorage.getItem("playerName")}!`},
            {speaker: Lucy, text: `${localStorage.getItem("playerName")}, are ya with me?`},
            {speaker: Lucy, text: `Good, you totally fell asleep on the sand. I totally made a sand castle on your belly HAHAHAHAHAHA`},

        ],
        choices: ["Huh...?", "Wha?"],
        next: () => 'lucyWakesYouUp2',
    },
    lucyWakesYouUp2: {
        background: "lakeLucy.png",
        dialogue: [
            {speaker: Lucy, text: "Anyways lets get you up. Off to Curiosity Peaks next, right?"},
        ],
        choices: ["Curiosity Peaks??", "Yes thats right, I wanted to get a Light Crystal."],
        next: (choice) => (choice == "Curiosity Peaks??" ? "peaksExplained": "scaredOfTheDark"),
    },
    peaksExplained: {
        background: "lakeLucy.png",
        dialogue: [
            {speaker: Lucy, text:"Yes dummy, curiosity peaks. "},
            {speaker: Lucy, text :"Ya know, the big huge mountain with snow on the top? Where Kris likes to Chill Out(hehe pun intended)"}
        ],
        choices: [],
        next: () => "wonderingWoods",
    },
    scaredOfTheDark: {
        background: "lakeLucy.png",
        dialogue: [
            {speaker: Lucy, text:"Yeah there we go! "},
            {speaker: Lucy, text:"Cause you get a lil nervous in the dark, right? Like Sebastian."}
        ],
        choices: [],
        next: () => "wonderingWoods",
    },
    wonderingWoods: {
        background: "forest.png",
        dialogue: [
            {speaker: Lucy, text: "Let's get going then, it's a long way up ever since the lifty thingy broke."},

        ],
        choices: [],
        next: () => "meetingJet",
    },
    meetingJet: {
        background: "forest.png",
        dialogue: [
            
            {speaker: Lucy, text: "Oh hey look! There's Jethro!"},
            {speaker: Jet, text: "Oh, hello you two! Pefect timing, I just found these two flowers, would you like one?"},
        ],
        choices: ["Yeah dude!", "Maybe Later"],
        next: (choice) => (choice == "Yeah dude!" ? "yeah" : "later" )
    },
    yeah: {
        background: "forest.png",
        dialogue: [
            {speaker: Jet, text: "Lovely! Here's a flower specialy for you! Bubbye, have fun ^w^"}
        ],
        choices: [],
        next: ()=>{
            Jet.give(flower, player);
            Jet.give(flower, Lucy);
            return "ruins";
        },
    },
    later: {
        background: "forest.png",
        dialogue: [
            {speaker: narrator, text: ""},
            {speaker: Jet, text: "Ah thats fine, I'll be here collectiong more flowers ^w^"},
            {speaker: Lucy, text: "Bye Jet! We will come to you whenever we want a flower!"}
        ],
        choices: [],
        next:()=>"ruins",
    },
    ruins: {
        background: "ruins.png",
        dialogue: [
            {speaker: Lucy, text: "Here's the ruins of an ancient past. I don't really know much about it, but apparently you can see all the farthest points of The Imaginary Island if you stand right in the middle."},
            {speaker: Lucy, text: "But from here we can see Curiosity Peaks right between the pillars!"},
            {speaker: Lucy, text: "I'm gonna stay here for a while, Penny said she wanted to come here and tell me something about an ancient mecha? I dunno, but I'll be here if you need me ^w^"}
        ],
        choices: ["Move Forward", "Move Back"],
        next: (choice) => (choice == "Move Forward" ? "lavaPool" : "meetingJet"),
    },
    lavaPool: {
        background: "sebastian-scene.png",
        dialogue: [
            {speaker: narrator, text: "You make your way forward and find youself at at a large pool of lava."},
            {speaker: Sebastian, text: `Oh hey ${localStorage.getItem("playerName")}, whatcha doin'?`},
        ],
        choices: ["Just chucking rocks in the lava, you?", "On my way to Curiosity Peaks to find a Light Crystal"],
        next: (choice) => (choice == "Just chucking rocks in the lava, you?" ? "meToo": "goodIdea"),
    },
    meToo: {
        background: "sebastian-scene.png",
        dialogue: [
            {speaker: Sebastian, text: "Oh hey nice me too! They make such a funny sound when they hit the lava"},
            {speaker: Sebastian, text: "I actually found this rock that looks kinda angry, ya want it?"}
        ],
        choices: ["Yes", "No"],
        next: (choice) => (choice == "Yes" ? "giveAngryStone" : "dontGiveAngryStone" ),
    },
    giveAngryStone: {
        background: "sebastian-scene.png",
        dialogue: [
            {speaker: Sebastian, text: "There we go!"},
            {speaker: narrator, text: "Sebastian hands you a rock. It somehow looks... angry?"}
        ],
        choices: [],
        next: () => {
            Sebastian.give(angryStone, player);
            return "cave"
        },
    },
    dontGiveAngryStone: {
        background: "sebastian-scene.png",
        dialogue: [
            {speaker: Sebastian, text: "Undertandable, its kinda ugly HAHAHHA, if you want a laugh you can come back here anytime"},
            {speaker: narrator, text: "Sebastian does not hand you the rock."}
        ],
        choices: [],
        next: () => "cave",
    },
    goodIdea: {
        background: "sebastian-scene.png",
        dialogue: [
            {speaker: Sebastian, text: ""},
            {speaker: Sebastian, text:"Thats a great idea! Always good to have a source of light with you, just in case you find a dark place."},
            {speaker: Sebastian, text: "Hey, before you go, take this with you."},
            {speaker: narrator, text: "Sebastian hands you a rock. It somehow looks... angry?"},
            {speaker: Sebastian, text: "I just thought it looked kinda funny"},
        ],
        choices: [],
        next: () => "cave",
    },
    cave: {
        background: "opening-to-sentinel.png",
        dialogue: [
            {speaker: narrator, text: "The base of Curiosity Peaks"},
            {speaker: narrator, text: "Go Up? or Go into the cave?"}
        ],
        choices:["Go to the peaks", "Go into the Cave"],
        next: (choice) => (choice == "Go to the peaks" ? "peaks" : "insideCave"), 
    },
    peaks: {
        background: "snow.png",
        dialogue: [
            {speaker: narrator, text: ""},
            {speaker: narrator, text: "The cold wind brings a strangely relaxing presence to you."},
            {speaker: narrator, text: "You hear the crunching of snow footsteps behind you."},
            {speaker: Kris, text: `Heya ${localStorage.getItem("playerName")}, good to see ya`},
            {speaker: Kris, text: "Lookin' for somethin'?"},
            
        ],
        choices: ["I'm trying to find a Light Crystal", "Just chilling out"],
        next: (choice) => (choice == "I'm trying to find a Light Crystal" ? "getCrystal" : "coolPun")
    },
    getCrystal: {
        background: "snow.png",
        dialogue: [
            {speaker: narrator, text: ""},
            {speaker: Kris, text: `Oh thats pretty lucky, I just picked up two that were sitting right next to each other. Here, you can have it`},
            {speaker: Kris, text: "There we go, all happy and shining."},
        ],
        choices: [],
        next:()=>{
            Kris.give(lightCrystal, player);
            return "completePeaks"
        },
    },
    completePeaks: {
        background: "snow.png",
        dialogue: [
            
            {speaker: Kris, text: "Ya got what you came for, right?"},
            {speaker: Kris, text: `Gonna head back down? Or ya wanna chill with me for a bit?`},
        ],
        choices: ["Head back", "Chill"],
        next:(choice)=>(choice == "Head back" ? "cave":"completePeaks"),
    },
    coolPun: {
        background: "snow.png",
        dialogue: [
            {speaker: Kris, text: "HAHAHAHAHA That was a pretty COOL pun"},
            {speaker: Kris, text: "Hey, I heard you were lookin' for a Light Crystal. I found one a bit earlier which is a fun coincidence, so you can have it"},
        ],
        choices: [],
        next:()=>{
            Kris.give(lightCrystal, player);
            return "completePeaks"
        },
    },
    insideCave: {
        background: "blank.webp",
        dialogue: [
            {speaker: narrator, text: ""},
            {speaker: narrator, text: "Can't see anything, its too dark."}
        ],
        choices: ["Back"],
        next: () => "cave",
    },


}

export async function playScene(key) {
    
    const scene = scenes[key];
    console.log(`Trying to play scene: ${key}`);

    // console.log(scene.dialogue[0].speaker);

    
    if (!scene) {
        console.error(`Scene '${key}' not found.`);
        return;
    }

    document.body.style.backgroundImage = `url("./images/${scene.background}")`;

    try {
        for (let {speaker, text} of scene.dialogue) {
            speaker.vanishCharacter();
            if (speaker != narrator) {
                speaker.generateCharacter();
            }
            speaker.speak(text);
            await waitForClick();
        }
        if (scene.choices.length == 0 && scene.dialogue.length == 1) {
            await waitForClick();
        }
    } catch (err) {
        console.error("Dialogue error in scene:", key, err);
    }
    

    if (scene.choices.length > 0) {
        let choice;
        if (scene.choices[0] === "__input__") {
            choice = await Choice(scene.choices);
        } else {
            choice = await Choice(scene.choices);
        }
    
        const nextScene = await scene.next(choice);
        await playScene(nextScene);
    }
    
    else if (scene.next != null) {
        const nextScene = await scene.next();
        await playScene(nextScene);
    }
}

export function waitForClick() {
    return new Promise((resolve) => {
        const box = document.querySelector("#dialogue-box");
        box.addEventListener('click', resolve, {once : true});
    })
}

async function speakAndWait(character, text) {
    character.speak(text);
    await waitForClick();
}