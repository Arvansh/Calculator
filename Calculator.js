// Script for Calculator

let display = document.getElementById("display");
let clear = document.getElementById("clear");
let calc = document.getElementById("calc")


function appendToDisplay(input){
  display.textContent += input;
}

clear.onclick = function (){
  display.textContent ="";
}

calc.onclick = function(){
  try {display.textContent = eval(display.textContent);}
  catch{display.textContent = `Error`}
}