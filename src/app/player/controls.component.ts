import { Component } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  template: `
    <a href="#" md-button mdTooltip="Nice!" class="icon"><md-icon class="like">favorite</md-icon> Nice!</a>
    <a href="#" md-button mdTooltip="Meh..." class="icon"><md-icon class="soso">delete</md-icon> Meh...</a>
  `
})

export class PlayerControlsComponent {}
