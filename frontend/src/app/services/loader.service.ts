import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  currentLoaderStatus: WritableSignal<any> = signal(null)
  constructor() { 
  }
}
