import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, data: any) {
        
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);

    }
  }

  get() {
    let storage = []
    try {

      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i) || '{}';
        let item = JSON.parse(localStorage.getItem(key) || '[]')
        storage.push(item)
              
      }

    } catch (e) {
      console.error('Error getting data from localStorage', e);

    }
    return storage
  }

  remove(key:string){
try{
 localStorage.removeItem(key)
 
} catch(e){
  console.error('Error removing data from localStorage', e);
}
  }

}
