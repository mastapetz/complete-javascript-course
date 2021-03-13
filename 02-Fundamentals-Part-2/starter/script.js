"use strict"; //aktiviert Strict mode zeigt uns manche Fehler in developer console
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //absichtlicher fehler um strict mode zu testen --> zeigt an das variable nicht def ist
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; //führt zu Error das interface reserved ist im strict mode
// const pricate = 534;


// function = reusable code blocks

function logger() { //inside {} function body
    console.log("My name is Peter");
}
//invoking/running/calling the function
logger();
logger();
logger();
//functions können daten empfangen und zurückgeben (receive return)
function fruitProcessor(apples, oranges) {  // in () parameter denen Werte zugewiesen werden können
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;  //ergebnis der funktion um später verwendet zu werden
}

// Wenn in einer Funktion eine return Anweisung aufgerufen wird, wird der Aufruf der Funktion gestoppt. Wenn ein Rückgabewert spezifiziert ist, wird dieser zu der aufrufenden Funktion zurückgegeben. Wenn kein Rückgabewert angegeben wird, wird stattdessen undefined zurückgegeben.
const appleJuice = fruitProcessor(5, 0); // die zahlen sind arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//functions sind eigentlich nur "values"

//function declaration können aufgerufen werden vor eigentlicher definition ((hoisting))

function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear; //einzelne ausgaben wie hier können direkt returned werden OHNE einer Variable zugeordnet zu werden (würde zu Fehler führen)
}


const age1 = calcAge1(1980);
console.log(age1);
//function expression
const calcAge2 = function (birthYear) {  //function wird ohne name erstellt, aber die funktion als variable gespeichert (Anonymus Function)
    return 2037 - birthYear;
} //expresions erzeugen value
const age2 = calcAge2(1980);

console.log(age1, age2);

// eigentlich egal ob mal expressions oder declarations verwendet, lehrer verwendet expressions im alles sauberer zu halten

//Arrow function (immer noch expression)
const calcAge3 = birthYear => 2037 - birthYear; //return passiert implicit wenn es ein einzeiler Code ist
const age3 = calcAge3(1980);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age
    // return retirement; //da mehrzeilig braucht es return hier
    return `${firstName} retires in ${retirement} Years`;
}

console.log(yearsUntilRetirement(1980, "Peter"));
console.log(yearsUntilRetirement(1991, "Jonas"));




function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {  //birthYear unterschiedlicher Parameter in beiden functionen
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {  //Zeile rauf runterverschieben Alt + pfeilrauf runter
        console.log(`${firstName} retires in ${retirement} Years`); //nach return wird ignoriert, da return sofort die Funktion verlässt
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1980, "Peter"));
console.log(yearsUntilRetirement(1950, "Jonas"));
*/
///////////////////////////////////
//Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
/*
// const calcAverage = (a, b ,c) => (a+b+c)/3;  //Lösung vom Lehrer
const calcAverage = (score1, score2, score3) => {
    const totalScore = (score1 + score2 + score3);
    const calcAverage = totalScore / 3;
    return calcAverage;
}

// console.log(`Average Score Dolphins is ${calcAverage(44, 23, 71)}
// Average Score Koalas is ${calcAverage(65, 54, 49)}`);

const checkWinner = function (avgDolphins, avgKoalas) {


    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win! ( ${avgDolphins} vs ${avgKoalas})`);
        return;
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win!(${avgKoalas} vs ${avgDolphins})`);
        return;
    } else {
        console.log(`No winner!( Dolphins ${avgDolphins} vs Koalas ${avgKoalas}) `);
        return;
    }
}
//Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas); //function ist egal welche nummern eigegeben werden
//Data2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas); //function ist egal welche nummern eigegeben werden
*//*
//Arrays (Data Structure)
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// WIchtigsten Data Structures in JS sind Arrays  und Objects
const friends = ["Michael", "Steven", "Peter"];  //Arrays gemacht mit [] (literal Syntax)
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); //andere Art zum Array erstellen [] üblicher

console.log(friends[0]); //Arrays sind 0 based, erster Eintrag bekommt mit 0
console.log(friends[2]);

console.log(friends.length); //lenght Property, nicht 0 based, fängt bei 1 zum zählen an
console.log(friends[friends.length - 1]) //zeigt letzten Eintrag des Arrays Innerhalb [] JS erwartet expression

friends[2] = "Jay";
console.log(friends); //nur primitive Werte können bei const nicht geändert werden, Arrays sind keine primitiven Werte
//friends =["Bob", "ALice"]  //funktioniert dann doch nicht

const firstName = "Peter";
const peter = [firstName, "Aigner", 2037 - 1980, "Contentcreator", friends]; //Arrays können in Arrays kommen
console.log(peter);
console.log(peter.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); //man kann kein Array von einer nummer abziehen
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//Methods  sind Array Operations


const friends = ["Michael", "Steven", "Peter"];

//add Elements
const newLength = friends.push("Jay"); //push(method) fügt Werte ans ende des Arrays (auch function) push gibt einen wert aus (neue Länge des Arrays hier)
console.log(friends);
console.log(newLength);

friends.unshift("John"); //unshift fügt neuen Eintrag am ANFANG des Arrays ein, gibt ebenso als Wert die Neue läne des Arrays aus
console.log(friends);

// remove Elements
friends.pop(); //entfernt letztes Element
const popped = friends.pop(); //ausgabe entferntes element
console.log(popped);
console.log(friends);

friends.shift() // entfernt ersten eintrag aus Array
console.log(friends);

console.log(friends.indexOf("Steven")); //Zeigt den Platz  des abgefragten Wertes im Array
console.log(friends.indexOf("Bob")); //da nicht vorhanden ausgabe -1

friends.push(23);
console.log(friends.includes("Steven")); //fragt ab ob etwas im Array vorhanden ist
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //prüft strict daher findet es die Nummer 23 nicht wenn es als String vorhanden ist ist

if (friends.includes("Steven")) {  //fragt ab ob "" im Array ist, wenn ja ausführung von {} sonst nicht
    console.log("You have a friend called Steven");
}





//////////////////////////
// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44

// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// GOOD LUCK 😀


const calcTip = function (bills) {
    // const tip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
    // return tip;
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2; //lösung von lehrer (ternary operator)
}
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];

console.log(bill); console.log(tip); console.log(total);



//objects definieren key value pairs

const peter = {  //erzeugt Objekt mit 5 properties {}=  object literal syntax. In objekten ist die Ordnung Egal.
    firstName: "Peter",
    lastName: "Aigner",
    age: 2037 - 1980,
    job: "Conten Creator",
    friends: ["Michael", "Jonas", "Steven"]
};
console.log(peter);

console.log(peter.lastName); // . ist ein operator und verlangt den "real property name"
console.log(peter["lastName"]);

const nameKey = "Name";
console.log(peter["first" + nameKey]); // mit [] können wir alles einfügen liefert undefined wenn nicht enthalten oder nicht passend zu key value paar.
console.log(peter["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Peter? Choose between firstName, lastName, age, job, and friends ");

if (peter[interestedIn]) {
    console.log(peter[interestedIn]);
} else {
    console.log("Wrong Request! Choose between firstName, lastName, age, job, and friends");
}

peter.location = "Wien";
peter["twitter"] = "@mastapetz";
console.log(peter);

// Chalenge
// "Peter has 3 friends, and his best friend is called Michael"

console.log(`${peter.firstName} has ${peter.friends.length} friends and his best friend is ${peter.friends[0]} `);


const peter = {
    firstName: "Peter",
    lastName: "Aigner",
    birthYear: 1980,
    job: "Conten Creator",
    friends: ["Michael", "Jonas", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {  //funktion als teil des Objekts nicht nur eine variable sondern auch ein property vom Objekt alle funktionen die in einem object sind werden zu einer method, method sind properties dadurch wird die function zu einem wert
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)  // this verweist auf "dieses" Objekt
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;  //hiermit macht ein neues property im Objekt
        return this.age;  //man muss hier nichtmal ein return value angeben für die Method
    },
    hasLicense: function () {
        this.license = this.hasDriversLicense == true ? "a drivers license" : "no drivers license"; // braucht das == true nicht
        return;
    },

    getSummary: function () { //lösung lehrer
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`
    }
};

console.log(peter.calcAge());  // object(peter) called mit . funktion/method von dem Objekt
peter.hasLicense();
// console.log(peter["calcAge"](1980)); //werte in [] muss hier ein String sein
//man kann auch werte innerhalb eines Objektes für ne funktions berechnung im objekt verwenden durch speziele variable this

console.log(peter.age);
console.log(peter.age);
console.log(peter.age);

// Arrays sind auch Objects
//Challenge
// "Peter is a **-year old **, and he has a drivers licence "

console.log(`${peter.firstName} is a ${peter.age} year old ${peter.job}, and he has ${peter.license}.`);
console.log(peter.getSummary());


///////////////////////
// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀

const john = {  //Lehrer macht das mit fullName als keyvalue pair
    firstName: "John",
    lastName: "Smith",
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        // return this.weight / this.height ** 2;
        this.bmi = this.weight / this.height ** 2; //lehrer lösung this.bmi fügt bmi im objekt als keyvalue ein
        return this.bmi;
    }
};


const mark = {
    firstName: "Mark",
    lastName: "Miller",
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {  //zwa nicht DRY aber das wird in OOP erklärt
        // return this.weight / this.height ** 2;
        this.bmi = this.weight / this.height ** 2; //lehrer lösung this.bmi fügt bmi im objekt als keyvalue ein
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(john.bmi, mark.bmi);

// Lehrer Lösung nur mit mark zuerst
if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`);
}

console.log(`${john.bmi > mark.bmi ? john.firstName + " " + john.lastName : mark.firstName + " " + mark.lastName}'s BMI ${john.bmi > mark.bmi ? john.bmi : mark.bmi} is higher than ${john.bmi < mark.bmi ? john.firstName + " " + john.lastName : mark.firstName + " " + mark.lastName}'s BMI ${john.bmi < mark.bmi ? john.bmi : mark.bmi}`);

// console.log(`${john.calcBMI() > mark.calcBMI() ? john.firstName + " " + john.lastName : mark.firstName + " " + mark.lastName}'s BMI ${john.calcBMI() > mark.calcBMI() ? john.calcBMI() : mark.calcBMI()} is higher than ${john.calcBMI() < mark.calcBMI() ? john.firstName + " " + john.lastName : mark.firstName + " " + mark.lastName}'s BMI ${john.calcBMI() < mark.calcBMI() ? john.calcBMI() : mark.calcBMI()}`);




///////////////////////////////////
//Loops

// console.log("Zählen  1");
// console.log("Zählen  2");
// console.log("Zählen  3");
// console.log("Zählen  4");
// console.log("Zählen  5");
// console.log("Zählen  6");
// console.log("Zählen  7");
// console.log("Zählen  8");
// console.log("Zählen  9");
// console.log("Zählen  10");

//for loop läuft solange die condition true ist (zweite angabe)
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Rep ${rep}`);
}


const peterArray = [
    "Peter",
    "Aigner",
    2037 - 1980,
    "Conten Creator",
    ["Michael", "Jonas", "Steven"],
    true
];

const types = [];

for (let i = 0; i < peterArray.length; i++) {
    //liest aus Array aus
    console.log(peterArray[i], typeof peterArray[i]);

    //fügt die ergebnisse während des loops in array types ein
    //types[i] = typeof peterArray[i];
    types.push(typeof peterArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
//continue exit current iteration of loop
console.log("----Only Strings -----");
for (let i = 0; i < peterArray.length; i++) {
    if (typeof peterArray[i] !== "string") continue;
    console.log(peterArray[i], typeof peterArray[i]);
}

//break exits the complete loop
console.log("----Break with number -----");
for (let i = 0; i < peterArray.length; i++) {
    if (typeof peterArray[i] === "number") break;
    console.log(peterArray[i], typeof peterArray[i]);
}



//backwards loops

const peterArray = [
    "Peter",
    "Aigner",
    2037 - 1980,
    "Conten Creator",
    ["Michael", "Jonas", "Steven"],
    true

];

for (let i = peterArray.length - 1; i >= 0; i--) {
    console.log(i, peterArray[i]);
}

//loop inside a loop

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`-----starting set ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${excercise}: Lifting weight rep ${rep} `);
    }
}



//the while loop






// for (let rep = 1; rep < 11; rep++) {
//     console.log(`Lifiting Weights  ${rep}`);
// }

let rep = 1;
while (rep < 11) {  //condition kann alles sein, muss kein counter sein
    // console.log(`while: Lifiting Weights  ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // math.trunc schneided die zahlen nach dem komma ab, math.random gibt eine zahl zwischen 0 und 1 aus
console.log(dice);

while (dice !== 6) {
    console.log(`DICE ROLL: ${dice}`); //ohne die berechnung in der while loop => infinite loop
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`DICE ROLL ${dice} Loop complete`);
}
*/

/////////////////////////////////
//Coding Challenge #4


/*
Let's improve Steven's tip calculator even more, this time using loops! Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
    4.1. First, you will need to add up all values in the array. To do the addition,start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array
GOOD LUCK 😀



const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2; //lösung von lehrer (ternary operator)
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
    // const tip = calcTip(bills[i]) //lösung lehrer
    // tips.push(tip);
    // totals.push(tip + bills[i]);

}
for (let i = 0; i <= bills.length - 1; i++) {
    totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

//Bonus

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {  // Lösung Lehrer i< arr.length macht das gleiche

        // sum = sum + arr[i];
        sum += arr[i] //laut lehrer besser so aber beides geht
        // console.log(`Stelle ${i} ergebnis ${sum}`);

    }
    return sum / arr.length;
};

console.log(`The avaerge is for totals ${calcAverage(totals)}`);
console.log(`The avaerge is for tips ${calcAverage(tips)}`);

*/