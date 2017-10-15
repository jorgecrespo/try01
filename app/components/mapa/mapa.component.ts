import { Component } from '@angular/core';
import { MapasService } from "../../services/mapas.service";
import { Marcador } from "../../interfaces/marcador.interface";



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {


  lat: number = -34.921289;
  lng: number = -57.9546056;
  zoom: number = 13;

  marcadorSel:any = null;

marcadores: any[] = [];



  constructor( private ms:MapasService) {

    this.ms.getMarcadores()
              .subscribe( data =>{
                console.log(data);
                this.marcadores = data;
              })

   }



clickMarcador( marcador, i ){
  console.log(marcador, i);
}


















}
