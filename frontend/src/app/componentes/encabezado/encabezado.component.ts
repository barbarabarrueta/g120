import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      alert("Enviar los datos al  servidor (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalEncabezado")?.click();
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
}
