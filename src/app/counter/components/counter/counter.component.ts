import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset(10)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter : number =15;


  increaseBy(a :number):void{
this.counter +=a;
  }

  reset(valor :number):void {
    this.counter=valor;
  }

}
