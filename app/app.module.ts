import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MarcadoresComponent } from './components/marcadores/marcadores.component';


import { AgmCoreModule } from '@agm/core';

//servicios
import { MapasService } from "./services/mapas.service";
import { MarcadorComponent } from './components/marcador/marcador.component';

//Rutas
import { APP_ROUTING } from "./app.routes";
import { KeysPipe } from './pipes/keys.pipe';
import { RubrosComponent } from './components/rubros/rubros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaComponent,
    MarcadoresComponent,
    MarcadorComponent,
    KeysPipe,
    RubrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmwXQW8OPoFSIoNcqH_KO1MiUSBPBhTzc'
    }),
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
