import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from "@angular/router";

import { IAppState } from '../store/state/app.state';
import { GetBookmarks, GetBookmark } from '../store/actions/bookmark.actions';
import { selectBookmarkList, selectSelectedBookmark } from '../store/selectors/bookmark.selector';
import { Bookmark } from '../models/bookmark.interface';


const ELEMENT_DATA: Bookmark[] = [
  {group: 'work', name: 'Hydrogen', url: 'H'}
];


@Component({
  selector: 'app-bookmarkmain',
  templateUrl: './bookmarkmain.component.html',
  styleUrls: ['./bookmarkmain.component.scss']
})

export class BookmarkmainComponent implements OnInit {
  title = 'Bookmark-prg';
  bookmarks$ = this._store.pipe(select(selectBookmarkList));
  bookmark$ = this._store.pipe(select(selectSelectedBookmark));
  displayedColumns: string[] = ['group', 'name', 'url'];
  dataSource = null;
  selectedBook: any;
  router: Router;

  constructor(private _store: Store<IAppState>, router: Router) {
    this.router = router;
  }

  onBookChange(ob) {
    this.selectedBook = ob.value;
  	this._store.dispatch(new GetBookmark(this.selectedBook));
    this.dataSource = this.bookmark$;
  }

  onResetBookMark() {
    localStorage.clear();
    localStorage.setItem("Reset", "yes");
    this._store.dispatch(new GetBookmarks());
    localStorage.setItem("Reset", "no");
  }


  onAddBookMark() {
    this.router.navigate(['/bookmark-frm']);
  }

  onDelBookmark(row: Bookmark) {
    var storedNames = JSON.parse(localStorage.getItem("bookmark"));
    var idx = 0; 
    storedNames.forEach(function(element) {
      if (element.group == row.group && element.name == row.name && element.url == row.url){
        storedNames.splice(idx, 1);
      }
      idx++;
    });
    console.log(storedNames);
    localStorage.setItem("bookmark", JSON.stringify(storedNames));
    this._store.dispatch(new GetBookmarks());
    
    this._store.dispatch(new GetBookmark(this.selectedBook));
    this.dataSource = this.bookmark$;

  }

  ngOnInit() {
    this._store.dispatch(new GetBookmarks());
  }
}

@Pipe({
  name: 'filterUnique',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let uniqueArray = Array.from(new Set(value)); 
    localStorage.setItem("primo", JSON.stringify(uniqueArray));
    return uniqueArray;
  }
}
