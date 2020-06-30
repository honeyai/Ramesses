// OKay Time to get this started

// Tuesday
// DONE!!!!! *Get proposal and wireframe done.

// *Figure out the number of backgrounds you'll need to finish.

// DONE!! *Build basic character stats.

// *Build Combat for multiple enemies and multiple actions (adding and removing status effects)

// Sheet: Strength, Athletics, Reflex/Detection, combat stat, Toughness, Tolerance,   

//-------Basic Character sheet------------

const Charactstat = {
    name: '',
    str: 0,
    athl: 0,
    refdet: 0,
    combat: 0,
    tough: 0,
    toler: 0,
    health: ((this.tough + this.toler) * 2),
    actions: []
}

const Ramesses = {
    name: "Ramesses",
    str: 6,
    athl: 6,
    Refdet: 8,
    combat: 10,
    tough: 6,
    toler: 6,
    health: 24,
    actions: []
}

let odds = (max) => {
    let num = Math.floor(Math.random() * (max - 2) + 2);
    if((num % 2) == 0){
        return num + 1;
        }
        else {
        return num;
        }    
}

let enemyHealth = (max) => {
    var min = 8,
        max = max,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

let randE = () => {
    var min = 0,
        max = 8,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

const enemyNames = ["Wrath", "Gluttony", "Lust", "Pride", "Averous", "Envy", "Sloth"]

class Enemy {
    constructor(name){
        this.name = name,
        this.str = odds(9), //between 2 and 8
        this.athl = odds(7),  //between 2 and 6
        this.refdet = odds(5),  //between 0 and 4
        this.combat = odds(7),  //between 2 and 6
        this.tough = odds(9),  //between 2 and 8
        this.toler = odds(9)  //between 2 and 8
        this.health = enemyHealth(25) // between 8 and 24
    }
}

let loadIn = new Array()


let versus = [];

let fight = () => {
    while (Ramesses.health > 0 && versus.length > 0){

    }
}