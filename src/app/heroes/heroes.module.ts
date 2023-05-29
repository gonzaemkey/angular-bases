import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Ordenamos los modulos primero y luego los componentes que importamos
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


//Queremos usar heroes como un modulo y no un componente


@NgModule({
  exports: [
    HeroComponent,
    ListComponent
    //Lo que queremos exportar como uso del módulo
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
