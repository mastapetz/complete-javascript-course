// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1990));
*/
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// Idee for schleife mit continue bei string
// - Find max value in temp array
// - Find min value in temp array
// Idee mit ner math function
// - Subtract min from max (amplitude) and return it
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Änderung
// Function should now receive 2 Arrays of Temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
// Idee.  mit push?

const calcTempAmplitudeNew = function (t1, t2) {
  //   const array1 = ["a", "b", "c"];  //kopier von MDN als vorlage
  //   const array2 = ["d", "e", "f"];
  //   const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitudeNew([3, 7, 4, 1, 8]);

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const array = [1, 3, 4, 7, 11];
const a = array.reverse(array);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
    // C) FIX
    // value: Number(prompt("Degrees celsius:")),
  };
  // B) FIND
  // console.table(measurement); //gibt objekt als tabelle aus

  // console.log(measurement.value, typeof measurement.value);
  // console.warn(measurement.value, typeof measurement.value);
  // console.error(measurement.value, typeof measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
// vermutung: Prompt gibt nur string zurück und muss vorher umgewandelt werden, oder anderer befehlt als prompt für Nummern
// - wie vermutet prompt gibt nur strings aus
// - wie vermutet muss umgewandelt werden mit der Number() function, nur wusste ich nicht wo muss (?) im Objekt gemacht werden, oder wo auch immer das prompt vorkommt
console.log(measureKelvin());

////// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  //B) Find C) FIX  statt 0 temps[0]
  let max = 0; //BUG
  let min = 0; //BUG

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger; ruft sofort debugger auf in console in browser
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitudeBug([3, 7, 4, 1, 8]);

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A) Identify
console.log(amplitudeBug);
*/
/////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK
*/

//Lösungsschrite:
//-Understanding the Problem
//-Array transformed to string sepperated by ...
//-What is the X days. (index +1)

//-Breaking up in sub problems
//-Transform into string
//-Transform each element into string with °C
//-string contains day (index+1)
//-add ... between start and end of string

// Was ist die schänste Lösung was die einfachste
//Hardcoden von Tagen oder mit einer Schleife oder mit swithc oder if
//---Lehrer hat ein Beispiel mit Hardcoden gemacht
//-Wie würde die Schleife aussehen
//---- macht standard schleife
//-Wie gebe ich jeden werden einzeln aus in einer schleife
//-Wonach gehe ich bei switch und if und  schleifenfür die länge des Arrays für Tage

//meine Lösung 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let arrLength = arr.length;
  switch (arrLength) {
    case 1:
      console.log(`...${arr[0]} °C in 1 day`);
      break;
    case 2:
      console.log(`...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days`);
      break;
    case 3:
      console.log(
        `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days`
      );
      break;
    case 4:
      console.log(
        `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days ...${arr[3]} °C in 4 days `
      );
      break;
    case 5:
      console.log(
        `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days ...${arr[3]} °C in 4 days ...${arr[4]} °C in 5 days`
      );
      break;
    case 6:
      console.log(
        `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days ...${arr[3]} °C in 4 days ...${arr[4]} °C in 5 days ...${arr[5]} °C in 6 days`
      );
      break;
    case 7:
      console.log(
        `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days ...${arr[3]} °C in 4 days ...${arr[4]} °C in 5 days ...${arr[5]} °C in 6 days ...${arr[6]} °C in 7 days`
      );
      break;
  }
  return arr;
};
//meine Lösung 2
// wie höre ich bei ausgabe für länge beim richtigenTag auf
// const printForecastLoop = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(
//       `...${arr[0]} °C in 1 day ...${arr[1]} °C in 2 days ...${arr[2]} °C in 3 days ...${arr[3]} °C in 4 days ...${arr[4]} °C in 5 days ...${arr[5]} °C in 6 days ...${arr[6]} °C in 7 days`
//     );
//   }
//   return arr;
// };

const printForecastLoop = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]} °C in ${i + 1} days ... `;
    str += `${arr[i]} °C in ${i + 1} days ... `;
  }
  console.log("... " + str);
  return arr;
};

// printForecast(data1);
// printForecast(data2);

printForecastLoop(data1);
printForecastLoop(data2);

// console.log(printForecast(arr));
