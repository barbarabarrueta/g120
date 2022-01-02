"use strict";
var saludo = "Bienvenidos/as a Arg. Programa";
console.log(saludo);
function editarAcercaDe() {
    let acercaDeInput = prompt("Ingrese el nuevo valor para Acerca De");
    document.getElementById("acerca-de").innerHTML = acercaDeInput;
}
/*var persona={nombre:"Manuel Andrés Sadosky",
perfil:"Desarrollador Frontend", residencia:"CABA"};*/
class Persona {
    constructor(nombre, perfil, residencia) {
        this.nombre = nombre;
        this.perfil = perfil;
        this.residencia = residencia;
    }
    saludar() {
        console.log("Bienvenido " + this.nombre);
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
}
var persona = new Persona("Manuel Sadosky", "Desarrollador", "CABA");
persona.Nombre = "Andrés";
persona.saludar();
document.getElementById("nombre").innerHTML = persona.Nombre;
document.getElementById("perfil").innerHTML = persona.perfil;
document.getElementById("residencia").innerHTML = persona.residencia;
