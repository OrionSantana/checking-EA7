import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  fecha = new FormControl('');
  nombre = new FormControl('');
  descripcion = new FormControl('');

  tareas: {id: number, nombre: string, fecha: string,descripcion: string|null, completada: boolean}[] = [];

  constructor() {}

  NTarea(){
    if (!this.descripcion.value)this.descripcion.setValue('...');
    if (this.fecha.value && this.nombre.value){
      const Ntarea = {
        id: this.tareas.length + 1,
        nombre: this.nombre.value,
        fecha: this.fecha.value,
        descripcion: this.descripcion.value,
        completada: false
      };

      this.tareas.push(Ntarea);

      this.nombre.setValue('');
      this.fecha.setValue('');
      this.descripcion.setValue('');
    }else{
      alert('INGRESE UN VALOR VALIDO EN TODOS LOS COMPARTIMENTOS');
    }
  }

  Complete(id: number){

  }

}
