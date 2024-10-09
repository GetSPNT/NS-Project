import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getItem(key : string) {
    try {
      return JSON.parse(sessionStorage.getItem(key) || '{}')
    }
    catch (e) {
      console.error(`Error parsing sessionStorage item: ${key}`, e);
    }
  }

  setItem(key : string, value : any) {
    try {
      return sessionStorage.setItem(key, JSON.stringify(value));
    }
    catch (e) {
      console.error(`Error setting sessionStorage item: ${key}`, e);
    }
  }

  removeItem(key : string) {
    try {return sessionStorage.removeItem(key);
    }
    catch (e) {
      console.error(`Error removing sessionStorage item: ${key}`, e);
    }
  }
}
