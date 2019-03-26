const displayResultado = document.querySelector(".display__resultado");
const calculo = document.querySelector(".actual");
const historial = document.querySelector(".history");
const btn = document.querySelector(".calculadora__botonera");

//agarra y procesa los botones presionados con click
btn.addEventListener("click", function(e) {
    let btnPresionado = e.target.textContent;
    procesarBtn(btnPresionado);
});


function procesarBtn(btn) {
    if(btn !== "=" && btn !== "c") {
        calculo.textContent += btn;
    } else {
        escribirResultado(eval(calculo.textContent));
    }
    if(btn === "c") {
        clear();
    }
}

function escribirResultado(resultado) {
    displayResultado.textContent = resultado;
}

function clear() {
    displayResultado.textContent = "0";
    calculo.textContent = "";
}








