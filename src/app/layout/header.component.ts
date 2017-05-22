import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AboutComponent} from './about.component';
import {PlayerService} from '../player.service';
import {Video} from 'scala-fun-client';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class AppHeaderComponent implements OnInit {
  currentlyPlaying: String
  constructor(public dialog: MdDialog, private playerService: PlayerService) {}
  ngOnInit(): void {
    this.playerService.onChange((video: Video) => this.currentlyPlaying = video.title);
  }
  about() {
    this.dialog.open(AboutComponent);
  }
}
