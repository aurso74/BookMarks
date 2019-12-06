import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from "@angular/router";

import { IAppState } from './store/state/app.state';
import { GetBookmarks, GetBookmark } from './store/actions/bookmark.actions';
import { selectBookmarkList, selectSelectedBookmark } from './store/selectors/bookmark.selector';
import { Bookmark } from './models/bookmark.interface';


const ELEMENT_DATA: Bookmark[] = [
  {group: 'work', name: 'Hydrogen', url: 'H'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {}
}




