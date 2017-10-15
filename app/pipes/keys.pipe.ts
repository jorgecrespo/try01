import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

//transforma objeto de objetos en arreglo de objetos y devuelve la clave
  transform(value: any): any {

    let keys = [];

for (let key in value){
    keys.push(key)
}

    return keys;


  }

}
