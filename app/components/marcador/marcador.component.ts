import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import  { Marcador }  from "../../interfaces/marcador.interface";
import { MapasService } from "../../services/mapas.service";

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent {

  nuevoMarcador: Marcador;

  temp:any = {};

  constructor( private ms:MapasService) {

   }

generarCoords(){

  this.temp.lng = -57.915294 + (-57.993410 + 57.915294)*Math.random();
  this.temp.lat = -34.888663 + (-34.954042 + 34.888663)*Math.random();
}

guardarMarcador(){
  console.log(this.temp);
  this.ms.insertarMarcador(this.temp);
}

}
