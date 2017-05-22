import { Component } from '@angular/core';
import {PlayerService} from 'app/player.service';

@Component({
  selector: 'app-player-controls',
  template: `
    <!--no liking implemented yet-->
    <!--a href="#" md-button mdTooltip="Love it!" class="icon"><md-icon class="like">favorite_border</md-icon> Love it!</a-->
    <a href="#" md-button mdTooltip="Skip to next video" class="icon" (click)="next()"><md-icon class="Next">skip_next</md-icon> Next</a>
  `
})

export class PlayerControlsComponent {
  constructor(private player: PlayerService) {}
  next(): void {
    this.player.next();
  }
}
