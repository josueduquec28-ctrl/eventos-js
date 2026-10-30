let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller3);
function taller3(){
    event.preventDefault();
    let a = parseFloat(document.getElementById("numero1").value);
    let b = parseFloat(document.getElementById("numero2").value);
    let c = parseFloat(document.getElementById("numero3").value);
    
    if (isNaN (a && b && c)){
        resultado.innerText="Escribe los números";
        resultado.className="error";
        return;
    }else if(a>b && a>c){
        resultado.innerText=`El número mayor es ${a}`;
        resultado.className="exito";
    }else if(b>a && b>c){
        resultado.innerText=`El número mayor es ${b}`;
        resultado.className="exito";
    }else if(c>a && c>b){
        resultado.innerText=`El número mayor es ${c}`;
        resultado.className="exito";
    }else{
        resultado.innerText="Los números son iguales";
        resultado.className="exito";
    }
}
    