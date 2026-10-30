let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit" , taller5);
function taller5(){
    event.preventDefault();
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let operaciones = document.getElementById("operacion").value;
    let total;

    if (isNaN(num1) || isNaN(num2)){
        resultado.innerText="Escribe los numeros";
        resultado.className="error";
        return;
    }
    if (operaciones ===""){
        resultado.innerText="Escoge una operacion";
        resultado.className="error";
        return;
    }
switch(operaciones){
    case "suma":
        total = num1+num2;
        break;
    case "resta":
        total = num1-num2;
        break;
    case "multiplicacion":
        total = num1*num2;
        break;
    case "division":
        if (num2 ===0 ){
        resultado.innerText="NO SE DIVIDE ENTRE CERO";
        resultado.className="error";
        return;
        }
        total = num1/num2;
        break;
}
    resultado.innerText=`El resultado es ${total}`;
    resultado.className="exito";
};