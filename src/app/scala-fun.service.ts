import { Injectable } from '@angular/core';
import { Client, Video } from 'scala-fun-client';

@Injectable()
export class ScalaFunService {
  private client: Client = new Client();
  next(): Promise<Video> {
    return this.client.next();
  }
}
