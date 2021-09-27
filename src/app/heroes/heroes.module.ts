import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    // Aqui colocamos los componentes a utilizar dentro de este modulo
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    // Aqui van los componentes que queremos mostrar fuera de este modulo
    ListadoComponent
  ],
  imports: [
    // Aqui van todos los modulos
    CommonModule
  ]
})

export class HeroesModule{}
