import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //selector es el nombre del componente
  //lo referenciamos en el htm como <app-counter></app-counter>
  template: `<h1>Hola Counter</h1>

    <h3>Counter: {{counter}}</h3>


    <button (click) = "increaseBy(+1)"> +1 </button>
    <button (click) = "resetCounter()">Reset</button>
    <button (click) = "increaseBy(-1)"> -1 </button>



  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ): void {

    this.counter += value;

  }

  resetCounter(){
    this.counter=10;
  }


}
