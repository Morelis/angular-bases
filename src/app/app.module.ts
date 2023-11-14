import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { Heromodule } from './heroes/hero.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    Heromodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
