import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss']
})
export class FlickrComponent implements OnInit {
  title = 'Image Finder';
  isSearch = true;
  isBookmarck = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSidebar(){
    this.isSearch = !this.isSearch
    this.isBookmarck = !this.isBookmarck
  }

}
