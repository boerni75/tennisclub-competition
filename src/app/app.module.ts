import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatListModule ],
  declarations: [ AppComponent, HelloComponent, PlayerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
