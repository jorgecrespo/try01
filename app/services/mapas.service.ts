import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  marcadoresUrl:string = "https://pjr01-ace8a.firebaseio.com/marcadores.json";
  marcadorUrl:string = "https://pjr01-ace8a.firebaseio.com/marcadores/";

  constructor(private http:Http) {


    }

//Guardar marcador en Firebase
nuevoMarcador(marcador:Marcador){
  console.log("Nuevo marcador en Firebase");
  let body = JSON.stringify( marcador );
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  return this.http.post( this.marcadoresUrl, body, { headers: headers} )
        .map( res=>{
            console.log(res.json());
            return res.json();
        } )
}

//actualizar marcador de Firebase
actualizarMarcador(marcador:Marcador,key$:string){
  console.log("Actualizo marcador en Firebase");
  let body = JSON.stringify( marcador );
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  let url = `${this.marcadorUrl}${key$}.json`
  return this.http.put( url, body, { headers: headers} )
        .map( res=>{
            console.log(res.json());
            return res.json();
        } )
}



//Guardar marcador en localStorage
    insertarMarcador (marcador:Marcador){

        console.log("Nuevo marcador en LocalStorage");
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