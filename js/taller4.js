let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit" ,taller4);
function taller4(){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("clave").value;
    let confirm = document.getElementById("confirmar").value;

    if (nombre===""){
        resultado.innerText="Ingresa el nombre";
        resultado.className="error";
        return;
    }else if (isNaN(edad)){
        resultado.innerText="Ingrese su edad";
        resultado.className="error";
        return;
    }else if (edad<18 || edad>100){
        resultado.innerText="Edad fuera de rango, ingrese de 18 a 100";
        resultado.className="error";
        return;
    }else if (!correo.includes("@") || !correo.includes(".")){
        resultado.innerText="Escribe un correo valido"
        resultado.className="error";
        return;
    }else if (confirm !==password){
        resultado.innerText="CONTRASEÑA NO COINCIDE";
        resultado.className="error";
        return;
    }else{
        resultado.innerText=`Registro exitoso, bienvenido(a) ${nombre}`;
        resultado.className="exito";
    }
};