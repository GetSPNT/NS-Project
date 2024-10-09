import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  socket : any;

}
