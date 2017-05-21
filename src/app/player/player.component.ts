import {Component, OnInit} from '@angular/core';
import {ScalaFunService} from '../scala-fun.service';
import {Video} from 'scala-fun-client';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
  constructor(private scalaFun: ScalaFunService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.playNext();
  }
  playNext(): void {
    this.scalaFun.next().then((video: Video) => {
      let someVideoUrl = video.url;
      if (someVideoUrl.indexOf('vimeo.com') >= 0) {
          someVideoUrl = someVideoUrl.replace('vimeo.com/', 'player.vimeo.com/video/') + '?autoplay=1&title=0&byline=0&portrait=0';
      } else {
          someVideoUrl = someVideoUrl.replace('youtube.com/watch?v=', 'youtube.com/embed/');
          someVideoUrl = someVideoUrl.split('&')[0];
          someVideoUrl = someVideoUrl.replace('&noredirect=1', '') + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&autohide=1';
      }
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(someVideoUrl);
      console.log(someVideoUrl);
      console.log(this.videoUrl);
    });
  }
}
