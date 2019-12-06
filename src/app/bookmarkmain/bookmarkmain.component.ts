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
    /*var storedNames = JSON.parse(localStorage.getItem("bookmark"));
    
    console.log(storedNames);

    var obj = JSON.parse('{"group": "work", "name": "firstWorkUrl1", "url": "Http://work/firstWurl"}'); 
    var obj1 = JSON.parse('{"group": "hobby", "name": "secondWorkUrl", "url": "Http://work/firstWurl"}'); 
    storedNames.push(obj);
    storedNames.push(obj1);
    console.log(storedNames);
    localStorage.setItem("bookmark", JSON.stringify(storedNames));
 
    this._store.dispatch(new GetBookmarks());

    this._store.dispatch(new GetBookmark(this.selectedBook));
    this.dataSource = this.bookmark$;*/

  }

  onDelBookmark(row: Bookmark) {
    var storedNames = JSON.parse(localStorage.getItem("bookmark"));
    var idx = 0; 
    storedNames.forEach(function(element) {
      if (element.group == row.group && element.name == row.name && element.url == row.url){
        console.log('trovato' + idx); 
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
  	//let uniqueArray = Array.from(new Set(value.map(team => team.group)))
/*  	if (value == null) {
  		console.log('null a');
  	} else {
     //value[0].name = '';
     //value[0].url = '';

     let uniqueArray = Array.from(new Set(value.map(team => team.group)))
     return uniqueArray;
  	}*/
    let uniqueArray = Array.from(new Set(value)); 
    console.log(uniqueArray[0]);
    console.log(JSON.stringify(uniqueArray));

    //var aaa = JSON.parse('{"group": "work1", "name": "firstWorkUrl", "url": "Http://work/firstWurl"}'); 
    //console.log(aaa);
    //uniqueArray.push(aaa);

    localStorage.setItem("primo", JSON.stringify(uniqueArray));

    //var storedNames = JSON.parse(localStorage.getItem("primo"));
    //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    //console.log(storedNames);
    /*console.log(storedNames.indexOf(aaa));
    storedNames.splice(storedNames.indexOf(aaa), 1);
    console.log(storedNames);*/
    return uniqueArray;
  }
}
