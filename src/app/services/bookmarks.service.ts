import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { Bookmarks } from '../models/bookmarks.interface';


@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  bookmarksUrl = `${environment.apiUrl}bookmarks.json`;
  bookmarks: Bookmarks;

  constructor(private _http: HttpClient) { }

  getBookmarks(): Observable<Bookmarks> {

  	let arraym = [];
    
    arraym.push({group: "work", name: "firstWorkUrl", url: "Http://work/firstWurl"});
    arraym.push({group: "work", name: "firstWorkUrl1", url: "Http://work/firstWurl1"});

    if (localStorage.getItem("Reset") == 'yes') {
      localStorage.setItem("bookmark", JSON.stringify(arraym));
    }

    return of(JSON.parse(' {"bookmarks":' + localStorage.getItem("bookmark") +' }')); //this._http.get<Bookmarks>(this.bookmarksUrl);
  }

}
