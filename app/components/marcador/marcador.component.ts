import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import  { Marcador }  from "../../interfaces/marcador.interface";
import { MapasService } from "../../services/mapas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent {

  nuevoMarcador: boolean = false;
  id:string;

  temp:any = {};

  constructor( private ms:MapasService,
               private router:Router,
               private ar: ActivatedRoute) {
      this.ar.params.subscribe( parametros => {
    //    console.log(parametros);
        this.id = parametros['id'];
        if( this.id !== "nuevo" ){

          this.ms.getMarcador( this.id)
                  .subscribe( marcador => this.temp = marcador)
        }


      })

   }


   resetForm(forma){
     this.router.navigate(['/marcador','nuevo']);
     forma.reset();
   }

generarCoords(){

  this.temp.lng = -57.915294 + (-57.993410 + 57.915294)*Math.random();
  this.temp.lat = -34.888663 + (-34.954042 + 34.888663)*Math.random();
}

guardarMarcador(){


  if( this.id == "nuevo"){
    //this.ms.insertarMarcador(this.temp);
    this.ms.nuevoMarcador(this.temp)
          .subscribe(data=>{
            this.router.navigate(['/marcador',data.name])
          },
        error=> console.error(error))
  }else {
    this.ms.actualizarMarcador (this.temp, this.id)
  //  this.ms.nuevoMarcador(this.temp)
          .subscribe(data=>{
            console.log("actualizando->",data)
          },
        error=> console.error(error))
  }


}

}
