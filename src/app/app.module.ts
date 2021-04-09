import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './flickr/search/search.component';
import { BookmarkComponent } from './flickr/bookmark/bookmark.component';
import { FlickrComponent } from './flickr/flickr.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarkComponent,
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
