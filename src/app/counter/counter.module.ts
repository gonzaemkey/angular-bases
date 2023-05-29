import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
      CounterComponent
  ],
  exports: [
    //Exportamos el CounterComponent para poder usarlo también fuera de la carpeta counter
    CounterComponent
  ]
})

export class CounterModule{}
