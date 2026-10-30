let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit" ,taller1);
function taller1(){
    event.preventDefault();
    let num = parseFloat(document.getElementById("numero").value);

    //*VALIDAR VARIABLE NUM NO SEA NULO isNaN
    if (isNaN(num)){
        resultado.innerText="Escribe un numero";
        resultado.className="error";
        return;
    }
    else if(num%1!==0){
        resultado.innerText="Escribe un numero entero";
        resultado.className="error";
        return;
    }else if(num%2==0){
        resultado.innerText="El número es par";
        resultado.className="exito";
    }else{
        resultado.innerText="El número es impar";
        resultado.className="error";
    }
};