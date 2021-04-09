import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Photo {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: Photo[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  search_keyword(keyword:string){
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&'
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1`
    return this.http.get<FlickrOutput>(url + params).pipe(map((res: FlickrOutput) => {
      const urlArr : any[] = [];
      res.photos.photo.forEach((ph:Photo)=>{
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title,
        id:ph.id};
          urlArr.push(photoObj);
        
      });
      return urlArr;
    }))
  }

}
