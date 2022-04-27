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

// ********************************
// ********************************
// ********************************

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

// ********************************
// ********************************
// ********************************

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


// ********************************
// ********************************
// ********************************

let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  }; //this is the spaceship object, it has two key/value pairs
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
  }; //this is the greenEnergy function, the obj in the "= obj =>" is the single parameter. the reason the ['Fuel Type'] is in brackets and not a .method is because it will call on the 'Fuel Type' key in the spaceship. So when greenEnergy(spaceship); is called below it will replace it. If we had done this instead "obj.fuelType" it would have **added** a fuel type, not replaced it. The function therefore looks for a key called 'Fuel Type' when an object is passed into it. 
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }; //unlike the greenEnergy function this function is creating a new key/value pair in whatever object is passed into it. 
  
  greenEnergy(spaceship1); //this is passing the spaceship object into the greenEnergy function. note in the function it searches for a ['Fuel Type'] key in whatever object is being passed into it.
  remotelyDisable(spaceship1); //this is passing the spaceship object into the remotelyDisable function.
  console.log(spaceship1); //this is logging the spaceship object to the console.
// Output:
// { 'Fuel Type': 'avocado oil',
//   homePlanet: 'Earth',
//   disabled: true }

// ********************************
// ********************************
// ********************************

let spaceship2 = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship2.crew) {
    console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`);
  }


// ****************************
// ****************************
// ****************************



let spaceship3 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

console.log('****************************')

for  (let i in spaceship3.crew) { //the "i" (and "pie" & "test" below) iterate all the crew Roles, which are the first nested objects after the spaceship object. The Roles themselves are objects. 
  console.log(`${i} : ${spaceship3.crew[i].name}`) //the first ${i} (because we've iterated over the first level objects in the "let i in spaceship3" line) will just print the Roles of the crew. The "${spaceship3.crew[i].name}" accesses the spaceship.thenthecrew.[i]then the role which has been iterated through above and then the .name accesses the name key and gives the value.
};

for (let pie in spaceship3.crew) {
  console.log(`${spaceship3.crew[pie].name} : ${spaceship3.crew[pie].degree}`)
}

console.log('****************************')

for (let test in spaceship3.crew) { //prints out the crew roles. all the objects that come after spaceship and crew.  
    console.log(test)
};

console.log('****************************')

for (let test2 in spaceship3) {
    console.log(test2)
}; //should just print crew --just tested, i was right. yay. 

console.log('****************************')

const godfather = {
    cast: {
        'Michael Corlone': {
            personality : 'cunning and ruthless',
            position : 'Don Corleone',
            'played by' : 'Al Pacino',
            oscar() {
                console.log(this)
            },
        },
        'Fredo Corleone': {
            personality : 'weak',
            position : 'dead',
            'played by' : 'Chris Cuomo'
        },
        'Vito Corlone': {
            personality : 'strong and moral',
            position : 'Godfather',
            'played by' : 'Marlon Brando'
        },    
    },
    reviews: {
        me: {
            review: 'this is the best film ever',
        },
        cretin: {
            review: 'this isn\'t the best film ever',
        },
        craig: {
            review: 'it pleases me i showed Don Juice this film',
        },
    }
};

for (let god in godfather.cast) {
    console.log(`the cast is ${god}`)
};

console.log('****************************');

// godfather.cast['Michael Corleone'].oscar();

const greatestFilmEver = {
    nameOfFilm : 'Godfather',
    reviews : 'I love this film',
    peopleWhoShouldBePokedInTheEye : 'people who say its a bad film',
    oscarGoesTo() {
        console.log(this);
    }
};

greatestFilmEver.oscarGoesTo();

console.log('****************************');

const nalaPuppy = {
    louisewarning : 'growl warning off evil',
    cutestPuppyEver : true,
    'favourite place' : 'the back garden',
    'favourite foods' : 'ribeye steak, duck, gammon',
    'is obedient all the time' : false,
    sound() {
        console.log('woof!');
    },
    evil() {
        console.log(this.louisewarning); //the reason "this" is needed in a method inside an object is because the evil() method has no access to the key louisewarning!!! if we just put console.log(louisewarning) the "nalaPuppy.evil()" should logged undefined in the console. "this" is reference to the current object you're write methods and functions into.  
    },
    puppypower() {
        console.log(`True or false, Nala is the cutest puppy ever? : ${this.cutestPuppyEver}`);
    }
};``

nalaPuppy.sound();
nalaPuppy.evil();
nalaPuppy.puppypower();
console.log(nalaPuppy['favourite foods']);


// ***************************
// ***************************
// ***************************

console.log('***************************')

const personcraig = {
	firstName: 'Craigus', //please remember to put '' marks around values
	secondName: 'Maximus',
	fullName() { 
	  console.log(`${this.firstName} ${this.secondName} is a peehole`); //we could also use return like this -- return `${this.firstName} ${this.secondName} is a peehole` -- notice () aren't needed like the console.log
	}
};

personcraig.fullName(); //it's a function so it needs (). 

//getters and setter are more useful in terms of writing the code above.
//getters are used to access properties in an object
//setters are used to change or mutate them
//so in the object about craigus maximus above we can use a getter to get the fullname, and setters to set the name from the outside. 

const personcraig1 = {
	firstName: 'Craigus', //please remember to put '' marks around values
	secondName: 'Maximus',
    thirdName: 'The Second',
	get fullName() { //this is the only change needed to set the above code to a getter 
	  return `${this.firstName} ${this.secondName} ${this.thirdName} is a peehole`;
	},
    set fullName(value) { //the (value) is the parameter
        const parts = value.split(' '); //the const parts is a variable. the value parameter has been split by the .split method and we've spaced a space in. 
            this.firstName = parts[0]; //this is refering the current object remember
            this.secondName = parts[1]; //the parts indexing ensures they'll be seperated by spaces because of the .split method placed on the parameter value. 
            this.thirdName = parts[2]; 
    }
};

personcraig1.fullName = 'Don James Juice';
console.log(personcraig1);
console.log('*****************');


//below is a Factory Function
function createCraig(name, radius) {
    return {
    name,    
    radius, //because we have radius as a parameter, we don't need to assign a value to the radius key
    poke(){
        console.log('poke ' + name + ' in the eye because of this radius: ' + radius);
        }
    }
};

const minionCraig = createCraig('Craig', 1000000); //1. this declares a variable minionCraig, and we're passing it into the createCraig function made above. this will set craigs radius to a million. 
console.log(minionCraig);
minionCraig.poke();
const mejames = createCraig('James', 300);
mejames.poke();
console.log(mejames);
console.log('**************');



