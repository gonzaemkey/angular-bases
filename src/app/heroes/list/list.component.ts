import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;
  //declaro el deleted hero arriba para poder usarlo por toda la clase con "this."

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

}
