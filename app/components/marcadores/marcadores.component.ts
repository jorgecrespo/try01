import { Component } from '@angular/core';
import { MapasService }  from "../../services/mapas.service";
import { Marcador } from "../../interfaces/marcador.interface";

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent  {

  marcadores: any[]=[];
  cargando: boolean = true;

  constructor( private ms:MapasService) {

    this.ms.getMarcadores()
              .subscribe( data =>{
                console.log(data);
                this.marcadores = data;
                this.cargando = false;
              })

   }

   borrarMarcador(k:string){

      this.ms.borrarMarcador(k)
              .subscribe(data => {
                if ( data ){
                  console.error(data);
                } else {
                  //se elimino correctamente
                  delete this.marcadores[k];
                }
              })



   }



}
