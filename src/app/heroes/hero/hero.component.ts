import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string= 'Iroman';
public age: number=45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{

  return ` ${this.name} - ${this.age} `;
}

chageHero():void{
 this.name='Spaiderman';
}

changeAge():void{
this.age=25;
}

reset():void{
  this.name='iroman';
  this.age=45;
}


}
