import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    //Componentes de este módulo que se podrán acceder desde fuera
    //La lista de personajes no es necesario exportarla, solo la usamos en el modulo
    MainPageComponent

  ],
  imports: [
    CommonModule,


  ],

})
export class DbzModule { }
