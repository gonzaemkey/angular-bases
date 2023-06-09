import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 10500,
  },{
    name: 'Vegeta',
    power: 8000
  },{
    name: 'Trunks',
    power: 9500
  }];

}
