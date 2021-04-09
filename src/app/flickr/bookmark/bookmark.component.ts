import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servises/storage.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
bookmark :any[] = [];
  constructor(private storage: StorageService) { 
       this.bookmark = this.storage.get();
  }

  ngOnInit(): void {
  }

  removeBookmark(index:any){
    console.log(index);
    
    this.storage.remove(index)
    this.bookmark = this.storage.get();
  }
}
