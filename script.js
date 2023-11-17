// Calculator Script
// Global Variables
let firstNumber = "";
let secondNumber = "";
let screenValue = "";

let operation = "";
let previousAnswers = [];
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
  previousAnswer = answer.toString();
  // Output
  document.getElementById("screen").innerHTML= screenValue;
  document.getElementById("answer").innerHTML= answer;
}

function AnswerPressed(){
  if (previousAnswer == "") {
    previousAnswer = "0";
    answer = Number(previousAnswer);
  } else if (previousAnswer != "") {
    answer = Number(previousAnswer);
  }
  
  document.getElementById("answer").innerHTML= answer;
}

function SevenPressed(){
  if (screenValue == ""){
    screenValue = "7";
  } else {
      if (previousAnswer != "") {
        screenValue = "7";
        previousAnswer = "";
      } else {
        
        screenValue += "7";
      } 
  }
  // output
  document.getElementById('screen').innerHTML= screenValue;
  document.getElementById("screen").innerHTML= previousAnswer;
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



  function PlusAgain(){
    if (previousAnswer != "") {
      firstNumber = previousAnswer;
      operation = "+";
      //
      screenValue = "+";
    } else {
      
    }
    document.getElementById("screen").innerHTML= screenValue;
    document.getElementById("answer").innerHTML= previousAnswer;
  }
  
// Equal To function 
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
  previousAnswer = answer.toString();
  previousAnswers.push(answer);
  screenValue = answer.toString();
}


// history
function History(){
  alert(previousAnswers);
}

// last edits
// SevenPressed logic not working
// issue: to stop adding number to screenValue when 7 or a number is pressed after equal to

