import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {

    let nuevoMarcador: Marcador = {
      lat : -34.9221635,
      lng : -57.959484,
      nombre: "Esta es mi casa",
      id:"0",
    
    }

    this.marcadores.push(nuevoMarcador);
    }

    insertarMarcador (marcador:Marcador){
      this.marcadores.push(marcador);
      this.guardarMarcadores();
    }

    borrarMarcador(idx:number){
      this.marcadores.splice(idx,1);
      this.guardarMarcadores();



    }

    guardarMarcadores(){
      localStorage.setItem('marcadores', JSON.stringify( this.marcadores ))
    }

    cargarMarcadores(){
      if( localStorage.getItem('marcadores')){
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
      } else{
        this.marcadores = [];
      }
    }


}
