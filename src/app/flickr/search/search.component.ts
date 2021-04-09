import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  pageSize = 12;
  pages: number[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 12;
  imagesPage: any[] = [];
  active: number = 0;

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
          //page calculation
          page = this.images.length / this.itemsPerPage;
          for (let i = 0; i < page; i++) {
            this.pages.push(i)
          }

          //start render image page
           this.imagesPage = this.renderPage(this.images, this.itemsPerPage, this.pageNumber)
        });
    } 
  }

  renderPage(arr: Array<number>, itemsPerPage: number, pageNumber: number): number[] {
    let startIndex = itemsPerPage * (pageNumber-1);
    let endIndex = startIndex + itemsPerPage;
    return arr.slice(startIndex, endIndex)

  }

  onPageChange(pageNumber: any) {
   
    
      console.log(pageNumber);
    this.pageNumber = pageNumber;
    this.imagesPage = this.renderPage(this.images, this.itemsPerPage, this.pageNumber)
this.active = pageNumber-1;
    
  }

  nextPage(){
    if(this.pageNumber >= 1 && this.pageNumber <= Math.floor(this.images.length / this.itemsPerPage)){
    this.pageNumber++;
    this.onPageChange(this.pageNumber)
    }
  }

  prevPage(){
    if(this.pageNumber > 1 && this.pageNumber <= Math.floor(this.images.length / this.itemsPerPage)+1){
    this.pageNumber--;
    this.onPageChange(this.pageNumber)
    }
  }

  addBookmark(index: any, key: string) {
    this.storage.set(key.toString(), this.images[index])
    console.log('images', this.images);
}
}
