// document.write("<h2>COME ON! <br> PLEASE WORK!</h2>")

const craig = {
    age: 40,
    cretinStatus: 'great',
    daughterAnnoyanceLevels: 'infinite',
    bloodPressure: 'high',
    iQ: 'low',
};

intelligence = craig.iQ;
amelia = craig.daughterAnnoyanceLevels;
console.log(`Amelia's ability to annoy is ${amelia}!`)
console.log("Amelia's ability to annoy is " + amelia + "!")
console.log(intelligence);


const person1 = {
    name: 'bob',
    age: 70,
    birth: 'ages ago',
    minionStatus: 'immense',
    iq: 53,
  }
  
  age = person1.age
  console.log(age + " DAMN I'm old!");
  console.log(person1);

  //   *********************************
  const line = '------------------------------';
  //this line seperates the groups
  const students = ['cretin', 'minion', 'inferior one', 'servant'];
  //this is the array of students
  console.log(line); //this logs the line ----etc, thats the reason the line appears before, not just between the groups of assignments. Without this being logged first it look disjointed and only appear inbetween. 
    for (let s = 0; s < students.length; s+=1) //remember .length iterates through the array and returns for values, unlike other iterations which return different values, or changes the array.
        {
            console.log('Name of twat: ' + students[s]); //this is string concatination and makes sure each value of the array is put on the end of the string
            for (let a = 1; a <= 4; a+=1) { //this is a nest for loop. the a = 1(initialization expression) ensures the assignment number begins with "Assignment 1". The "a <= 4"(stopping condition) stops the amount of assignments listed when it gets to Assignment 4. Also remember the difference between incrementing by doing this: ++(which increments by one) and +=(which increments by a value of your choice: for example +=3)
                console.log(`Assignment ${a}: -------`); //because of the (let a = 1; a <= 4; a+=1) this string literal will log "Assignment ${a}" into the console. The ${a} will go 1 to 4. 
            }
            console.log(line); // this logs the ---------at the end. 
        }
        // out is 25 lines of code
//         ------------------------------
// Name of twat: cretin
// Assignment 1: -------
// Assignment 2: -------
// Assignment 3: -------
// Assignment 4: -------
// ------------------------------
// Name of twat: minion
// Assignment 1: -------
// Assignment 2: -------
// Assignment 3: -------
// Assignment 4: -------
// ------------------------------
// Name of twat: inferior one
// Assignment 1: -------
// Assignment 2: -------
// Assignment 3: -------
// Assignment 4: -------
// ------------------------------
// Name of twat: servant
// Assignment 1: -------
// Assignment 2: -------
// Assignment 3: -------
// Assignment 4: -------
// ------------------------------

// ***********

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() { //the retreat() is a new method created for the alienShip object
    console.log(retreatMessage) //when retreat() is called it will console.log the retreatMessage that was first written above. 
  },
  takeOff() { //the takeOff() is a new method created for the alienShip object
      console.log('Spim... Borp... Glix... Blastoff!') //when the takeOff() method is called it will console.log "Spim... Borp... Glix... Blastoff!"
  }
}

alienShip.retreat(); //object.method -- This is calling the retreat() method created above. There is no need to write console.log(retreat) or console.log(retreat()) (these won't work) because the console.logging of it was done when the method was created. 
alienShip.takeOff(); //see one line above

// *************

let manUtd = {
    sponsorships: {
        gilette: 'millions!',
        apple: 'billions',
        nike: 'a few pennies - cheap skates',
    },
    manager: {
        firstname: 'alex ferguson',
        careerstatus: 'retired',
        trophies: 'a fuck ton!',
    },
    players: {
        best: 'Ronaldo',
        position: 'striker',
        goalsScored: 'lost count',
        celebration() { console.log('SSSSUUUUIIII!!!!') }
    },
    worstPlayers: {
        pogba: {
            rating: 0,
            effort: '12%',
            lazinessLevel: 'immense',
        },
        maguire: {
            comments: 'lol',
            defensiveAbility: 'LOL! HAHAHAHAHA',
            greatestPerformance: 'against his own team',
            finalVerdict: 'split condom',
        }
    }
};

manUtd.players.celebration(); //in order to call the method celebration() so we can have "SSSSUUUUIIII" logged to the console notice how I have to call the first function "manUtd" and then also the nested one "players". Because the ".celebration()" method is only available to the players object. 
highestGoalscorer = manUtd.players.best;
console.log(highestGoalscorer);
englishDefender = manUtd.worstPlayers.maguire.finalVerdict;
console.log("Maguire is a " + englishDefender);
maguireQuestion = manUtd.worstPlayers.maguire.defensiveAbility;
console.log(`Do you rate maguire as a defender? Response: ${maguireQuestion}`);

const pageParagraph = document.querySelectorAll("p");
console.log(pageParagraph);

const myP = document.getElementById("myP");
myP.addEventListener("click", function(){ myP.style.background = "lightblue" }, true);
myP.addEventListener("dblclick", function(){ myP.style.background = "orange" });

// const myDiv = document.getElementById("myDiv");


const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };

  let changePlanet = leaveThisHellHole => {
    leaveThisHellHole.hone = 'mars'
  };
   
  paintIt(spaceship); 
  console.log(spaceship.color);
  changePlanet(spaceship);
  console.log(spaceship.homePlanet);
