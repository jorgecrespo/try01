import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RubrosService {

    rubrosUrl:string = "https://pjr01-ace8a.firebaseio.com/rubros.json";


  constructor( private http:Http) { }

//alta de un nuevo rubro
altaRubro(rubro){
  let body = JSON.stringify( rubro );
  console.log(JSON.stringify( rubro ))
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  return this.http.post( this.rubrosUrl, body, { headers: headers} )
        .map( res=>{
            console.log(res.json());
            return res.json();
        } )

}



//listado de rubros
getRubros(){

  return this.http.get( this.rubrosUrl )
          .map( res=> res.json())
        }




} //fin clase
