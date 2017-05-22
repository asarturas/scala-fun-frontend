import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {PlayerService} from '../player.service';
import {Video} from 'scala-fun-client';

@Component({
  selector: 'app-player',
  template: `
    <span *ngIf="videoUrl">
      <iframe class="e2e-iframe-trusted-src" [src]="videoUrl" frameborder="0" autoplay="1"></iframe>
    </span>
  `
})

export class PlayerComponent implements OnInit {
  videoUrl: SafeUrl;
  constructor(private playerService: PlayerService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.playerService.onChange((video: Video) => this.next(video));
    this.playerService.next();
  }
  next(video: Video): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
  }
}
