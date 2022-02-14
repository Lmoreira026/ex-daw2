//Declarações
const formulario = document.querySelector("#formulario");
const resultadoCovidCt = document.querySelector("#resultado-covid-ct");
const testeCovidRadios = document.getElementsByName("teste-covid");

//Funções
function onSubmit(event) {
  event.preventDefault();
  console.log("Oi");
}
function onTesteCovidRadioChange(event) {
  if (event.target.value === "sim") {
    resultadoCovidCt.classList.add("show");
  } else {
    resultadoCovidCt.classList.remove("show");
  }
}

//Eventos
formulario.addEventListener("submit", onSubmit);
testeCovidRadios.forEach(function (radio) {
  radio.addEventListener("change", onTesteCovidRadioChange);
});
