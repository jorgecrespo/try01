import { Component } from '@angular/core';
import { RubrosService } from '../../services/rubros.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css']
})
export class RubrosComponent {

  rubros:any[]=[];



  constructor( private rs:RubrosService) {

  this.listarRubros();


   }


agregarRubro(termino:string){
  let aux:any={};
  aux.id = 1;
  aux.rubro = termino

  this.rs.altaRubro(aux)
        .subscribe(data=>{
          console.log(data)
          this.listarRubros();          
        },
      error=> console.error(error))
}

listarRubros(){
  this.rs.getRubros()
            .subscribe( data =>{
              console.log(data);
              this.rubros = data;
            })

}


}
