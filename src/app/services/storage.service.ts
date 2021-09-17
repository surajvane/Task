import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  store(keyname:any,value:any){
    console.log('store function called');
    localStorage.setItem(keyname,value);
  }
  recieve(keyname:any){
    return localStorage.getItem(keyname);
  }
  remove(keyname:any)
  {localStorage.removeItem(keyname);}
}


