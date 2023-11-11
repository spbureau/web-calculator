// Calculator Script
// Global Variables
let firstNumber = "";
let secondNumber = "";
let screenValue = "";

let operation = "";
let previousAnswer = "";
let answer;

console.log(screenValue);

function ClearAll() {
  screenValue = "0";
  firstNumber = "";
  secondNumber = "";
  operation = "";
  answer = "0.00";
  previousAnswer = "";
  // Output
  document.getElementById("screen").innerHTML = screenValue;
  document.getElementById("answer").innerHTML = answer;
}

function ClearScreen(){
  screenValue = "0";
  firstNumber = "";
  secondNumber = "";
  operation = "";
  answer = Number(previousAnswer);
  // Output
  document.getElementById("screen").innerHTML= screenValue;
  document.getElementById("answer").innerHTML= answer;
}

function SevenPressed(){
  if (screenValue != "0") {
    screenValue += "7";
  } else if (screenValue == "0") {
    screenValue = "7";
  }

  document.getElementById('screen').innerHTML= screenValue;
}

function EightPressed(){
  //const seven = "7"; 
  if (screenValue == "0") {
    screenValue = "8";
  } else {
    screenValue += "8";
  }
  document.getElementById('screen').innerHTML= screenValue;
}

function NinePressed(){
  // const seven = "7"; 
  if (screenValue == "0") {
    screenValue = "9";
  } else {
    screenValue += "9";
  }
  
  document.getElementById('screen').innerHTML= screenValue;
}

function ZeroPressed(){
  if (screenValue == "0") {
    screenValue = "0";
  } else {
    screenValue += "0";
  }
  document.getElementById('screen').innerHTML= screenValue;
}

function PointPressed(){
  if (screenValue.includes(".")) {
    screenValue = screenValue;
  } else {
    screenValue += ".";
  }
  document.getElementById("screen").innerHTML= screenValue;
}


function PlusPressed(){
  if (screenValue.includes("+")) {
    screenValue = screenValue;
  } else {
      if (screenValue == "0" || screenValue == ""){
        screenValue = "0";
      } else {
          if (previousAnswer == ""){
            firstNumber = screenValue;
            operation = "+";
            screenValue += "+";
          }
          else if(previousAnswer != "" && previousAnswer != "0"){
            console.log("there's pa");
            firstNumber = previousAnswer;
            operation = "+";
            //
            screenValue = previousAnswer + "+";
          } else {
            screenValue = "Syntax error";
          }
      }
  }
  /////
  /*else if (screenValue == ""){
    screenValue = "0";
  }*/ 
  /*
  else {
    // level 1 else
      if (screenValue.includes("+")){
        screenValue = screenValue;
      } else {
        // level 2 else
          
          else if(previousAnswer != ""){
            firstNumber = previousAnswer;
            screenValue = previousAnswer + "+";
            operation = "+";
          } else {
            // level 3 else
            // cut to first if...
            screenValue = "Syntax error"
          }
      }
  } */
  
  document.getElementById("screen").innerHTML= screenValue;
}

function EqualToPressed(){
  if (firstNumber != "" ) {
    secondNumber = screenValue.slice(screenValue.indexOf('+') + 1);
    console.log(typeof(answer));
    switch (operation) {
      case '+':
        // code
        answer = Number(firstNumber) + Number(secondNumber);
        console.log(secondNumber)
        console.log(typeof(answer));
       // answer = result.toString();
        break;
      
    }
  } else {
    answer = Number(screenValue);
  }
  document.getElementById("answer").innerHTML= answer;
  screenValue = answer.toString();
}

