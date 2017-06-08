import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule, MdButtonModule, MdIconModule, MdTooltipModule, MdDialog,
  MdDialogModule, MdCardModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/header.component';
import { PlayerControlsComponent } from './player/controls.component';
import { PlayerComponent } from './player/player.component';
import {AboutComponent} from './layout/about.component';
import {PlayerService} from './player.service';
import {ApiBaseUrlEnv} from 'app/configuration';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
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
    MdTooltipModule,
    MdDialogModule,
    MdCardModule
  ],
  entryComponents: [
    AboutComponent
  ],
  providers: [
    ApiBaseUrlEnv,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
