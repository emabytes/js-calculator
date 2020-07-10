num = "";

function selectSeven() {
  num = num + "7";
  document.getElementById("result").innerHTML = num;
}
function selectEight() {
  num = num + "8";
  document.getElementById("result").innerHTML = num;
}
function selectNine() {
  num = num + "9";
  document.getElementById("result").innerHTML = num;
}

function selectFour() {
  num = num + "4";
  document.getElementById("result").innerHTML = num;
}

function selectFive() {
  num = num + "5";
  document.getElementById("result").innerHTML = num;
}
function selectSix() {
  num = num + "6";
  document.getElementById("result").innerHTML = num;
}

function selectOne() {
  num = num + "1";
  document.getElementById("result").innerHTML = num;
}

function selectTwo() {
  num = num + "2";
  document.getElementById("result").innerHTML = num;
}

function selectThree() {
  num = num + "3";
  document.getElementById("result").innerHTML = num;
}
function selectZero() {
  num = num + "0";
  document.getElementById("result").innerHTML = num;
}

function add() {
  num = num + "+";
  document.getElementById("result").innerHTML = num;
}

function sub() {
  num = num + "-";
  document.getElementById("result").innerHTML = num;
}
function multiply() {
  num = num + "*";
  document.getElementById("result").innerHTML = num;
}
function divide() {
  num = num + "/";
  document.getElementById("result").innerHTML = num;
}
function decimal() {
  num = num + ".";
  document.getElementById("result").innerHTML = num;
}
function reset() {
  num = "";
  document.getElementById("result").innerHTML = num;
}

function calculate() {
  let text = document.getElementById("result").innerHTML;
  let result = Number(eval(text).toFixed(2));
  document.getElementById("result").innerHTML = result;
}
