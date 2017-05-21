import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdToolbarModule, MdButtonModule, MdIconModule, MdTooltipModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/header.component';
import { PlayerControlsComponent } from './player/controls.component';
import { PlayerComponent } from './player/player.component';
import {ScalaFunService} from './scala-fun.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    PlayerControlsComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule
  ],
  providers: [
    ScalaFunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
