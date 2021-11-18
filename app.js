class Casino {
    // Write code here
    timePlayed = 0;
    name = '';
    isFakeCoin = false;

    constructor(name, isFakeCoin) {
        this.name =  name;
        this.isFakeCoin = typeof isFakeCoin !== 'undefined'? isFakeCoin: false;
    }

    playGame(betAmount) {

        let randNumber = Math.random();
        if(randNumber <= 0.5 || this.isFakeCoin) {
            // casino always win if isFakeCoin set to true
            console.log(randNumber)
            console.log(`${this.name} won`);
        } else {
            // player win if randNumber is less or equal to 0.5 and isFakeCoin is false
            this.timePlayed++;
            console.log(`Player won ${betAmount * this.timePlayed+1}`);
        }
    }

    rollDie(d) {
        // random die roll between 1 and d
        let rollResult = Math.floor(Math.random()*d)+1;
        console.log(rollResult);
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

