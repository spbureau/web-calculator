// Calculator Script
// Global Variables
let firstNumber = "";
let secondNumber = "";
let screenValue = "";

let operation;

let answer = "";



function ClearScreen(){
  screenValue = "0";
  answer = "0";
  document.getElementById("screen").innerHTML= screenValue;
  document.getElementById("answer").innerHTML= answer;
}

function SevenPressed(){
  if (screenValue == "0") {
    screenValue = "7";
  } else {
    screenValue += "7";
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


function PlusPressed(){
  if (screenValue == "" || screenValue == "0") {
    screenValue = "0"
  } else {
    firstNumber = screenValue;
    operation = "+";
    screenValue += "+";
  }
  
  document.getElementById("screen").innerHTML= screenValue;
}

function EqualToPressed(){
  if (firstNumber != "" ) {
    secondNumber = screenValue
    switch (operation) {
      case '+':
        // code
        answer = Number(firstNumber) + Number(secondNumber);
        break;
      
    }
  } else {
    answer = screenValue;
  }
  document.getElementById("answer").innerHTML= answer;
}

