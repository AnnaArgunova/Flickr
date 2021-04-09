import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servises/storage.service';
import { HttpService } from '../../servises/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  images: any[] = []
  keyword: string = '';
  imageCount: any[] = [];
  pageSize = 12;
  
  pages: number[] = [];
  pageNumber:number=0;

  constructor(private http: HttpService, private storage: StorageService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    let page: number = 0;
    this.pages = []
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.http.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
          page = this.images.length / 10;

          for (let i = 0; i < page; i++) {
            this.pages.push(i)
          }
        });
      console.log('pages', this.pages);
    }
  }

  onPageChange(pageNumber:any){
console.log(pageNumber);
this.pageNumber = pageNumber;

  }
  addBookmark(index: any, key: string) {
    this.storage.set(key.toString(), this.images[index])
    console.log('images', this.images);




  }
}
