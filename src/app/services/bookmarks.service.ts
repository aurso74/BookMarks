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
    
    //if the user click on reset button (detail form) localstorage is clear and 
    //are added default item (only for proof purpose)
    if (localStorage.getItem("Reset") == 'yes') {
      arraym.push({group: "work", name: "firstWorkUrl", url: "Http://work/firstWurl"});
      arraym.push({group: "work", name: "secondWorkUrl", url: "Http://work/secondWurl"});
      arraym.push({group: "leisure", name: "firstLeisureUrl", url: "Http://work/firstWurl"});
      arraym.push({group: "leisure", name: "secondLeisureUrl", url: "Http://work/secondWurl"});
      arraym.push({group: "personal", name: "firstPersonalUrl", url: "Http://work/firstWurl"});
      arraym.push({group: "persona", name: "secondPersonalUrl", url: "Http://work/secondWurl"});
      localStorage.setItem("bookmark", JSON.stringify(arraym));
    }
    return of(JSON.parse(' {"bookmarks":' + localStorage.getItem("bookmark") +' }')); 
  }

}
