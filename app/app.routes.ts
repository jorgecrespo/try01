import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from "./components/mapa/mapa.component";
import { MarcadoresComponent } from "./components/marcadores/marcadores.component";
import { MarcadorComponent }  from "./components/marcador/marcador.component";
import { RubrosComponent } from "./components/rubros/rubros.component";
import  { PendienteComponent }from "./components/pendiente/pendiente.component";
import { UsuariosComponent }  from "./components/usuarios/usuarios.component";

const APP_ROUTES: Routes = [
  { path: 'mapa', component: MapaComponent },
  { path: 'marcadores', component: MarcadoresComponent },
  { path: 'pendiente', component: PendienteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'marcador/:id', component: MarcadorComponent },
  { path: 'rubros', component: RubrosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mapa' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
