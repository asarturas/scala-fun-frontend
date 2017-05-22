import { Injectable } from '@angular/core';
import { Client, Video } from 'scala-fun-client';

@Injectable()
export class PlayerService {
  currentVideo: Video;
  subscribers: Array<(video: Video) => void> = [];
  private client: Client = new Client();
  onChange(callback: (video: Video) => void): void {
    this.subscribers.push(callback);
  }
  notify(): void {
    this.subscribers.forEach(subscriber => subscriber(this.currentVideo));
  }
  next(): void {
    this.client.next().then((video: Video) => {
      this.currentVideo = video;
      this.notify();
    });
  }
}
