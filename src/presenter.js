import { sumar, multiplicar } from "./sumador.js"; 

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");


const firstMultiplicar = document.querySelector("#primer-numero-multiplicar");
const secondMultiplicar = document.querySelector("#segundo-numero-multiplicar");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultado-div-multiplicar");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplicar.value);
  const secondNumber = Number.parseInt(secondMultiplicar.value);

  divMultiplicar.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
