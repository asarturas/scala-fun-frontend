import {Inject, Injectable} from '@angular/core';
import { Client, Video } from 'scala-fun-client';
import {ApiBaseUrl} from './configuration';

@Injectable()
export class PlayerService {
  currentVideo: Video;
  subscribers: Array<(video: Video) => void> = [];
  private client: Client;
  constructor(@Inject(ApiBaseUrl) private baseUrl: string) {
    this.client = new Client(baseUrl);
  }
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
