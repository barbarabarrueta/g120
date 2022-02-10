import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { MiPortfolioService } from 'src/app/servicios/mi-portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;//al inicio   debe estar en false
  form:FormGroup;
  constructor(private miServicio:MiPortfolioService,private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required, Validators.minLength(5)]],
      position:['',[Validators.required]],
      ubication:['',[Validators.required]],
      url:['https://',[Validators.required, Validators.pattern('https?://.+')]]
    })
  }

  get fullName()
  {
    return this.form.get("fullName");
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona=data["persona"];
    })
  }

  guardarDatosEncabezado(){
    if (this.form.valid)
    {
      let fullName=this.form.get("fullName")?.value;
      let position=this.form.get("position")?.value;
      let ubication=this.form.get("ubication")?.value;
      let url=this.form.get("url")?.value;

      let personaEditar=new Persona(fullName,position,ubication,url);
      this.miServicio.editarDatosPersona(personaEditar).subscribe({next: (d) => {
        this.persona=personaEditar;
        document.getElementById("cerrarModalEncabezado")?.click();
      },
        error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
      })
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }

  mostrarDatosEncabezado()
  {
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("url")?.setValue(this.persona.image);
  }
}
