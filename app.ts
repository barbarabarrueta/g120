var saludo:string="Bienvenidos/as a Arg. Programa";
console.log(saludo);

function editarAcercaDe()
{
   let acercaDeInput:string=prompt("Ingrese el nuevo valor para Acerca De") as string;
   (document.getElementById("acerca-de") as HTMLParagraphElement).innerHTML=acercaDeInput;
}

/*var persona={nombre:"Manuel Andrés Sadosky", 
perfil:"Desarrollador Frontend", residencia:"CABA"};*/

class Persona
{
    private nombre:string;
    perfil:string;
    residencia:string;

    constructor(nombre:string, perfil:string,residencia:string){
        this.nombre=nombre;
        this.perfil=perfil;
        this.residencia=residencia;
    }

    saludar()
    {
        console.log("Bienvenido " + this.nombre);
    }

    get Nombre():string{
        return this.nombre;
    }

    set Nombre(nombre:string)
    {
        this.nombre=nombre;
    }

}

var persona:Persona=new Persona("Manuel Sadosky","Desarrollador","CABA");
persona.Nombre="Andrés";
persona.saludar();

(document.getElementById("nombre") as HTMLParagraphElement).innerHTML=persona.Nombre;
(document.getElementById("perfil") as HTMLParagraphElement).innerHTML=persona.perfil;
(document.getElementById("residencia") as HTMLParagraphElement).innerHTML=persona.residencia;

