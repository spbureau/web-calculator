// Calculator Script
// Global Variables
let firstNumber = "";
let secondNumber = "";
let screenValue = "";

let operation = "";
let previousAnswer = "";
let answer = 0;

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

function AnswerPressed(){
  if (previousAnswer == "") {
    previousAnswer = "0";
    answer = Number(previousAnswer);
  } else {
    answer = Number(previousAnswer);
  }
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
  if (firstNumber == "") {
    if (screenValue.includes(".")) {
    screenValue = screenValue;
    } else {
        screenValue += ".";
      }
  } else {
    // secondNumber point test
    let secondNum = screenValue.slice(screenValue.indexOf(operation) + 1);
    let secondNumberHaPoint = secondNum.includes(".");
    if (secondNumberHaPoint) {
      screenValue = screenValue;
    } else {
      screenValue +=".";
    }
  }
  // output 
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

