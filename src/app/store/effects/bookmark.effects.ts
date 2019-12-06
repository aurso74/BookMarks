import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetBookmarkSuccess,
  EBookmarkActions,
  GetBookmarksSuccess,
  GetBookmark,
  GetBookmarks
} from '../actions/bookmark.actions';
import { BookmarksService } from '../../services/bookmarks.service';
import { Bookmarks } from '../../models/bookmarks.interface';
import { selectBookmarkList } from '../selectors/bookmark.selector';

@Injectable()
export class BookmarkEffects {
  @Effect()
  getBookmark$ = this._actions$.pipe(
    ofType<GetBookmark>(EBookmarkActions.GetBookmark),
    map(action => action.payload),
    withLatestFrom( this._store.pipe(select(selectBookmarkList))),
    switchMap(([group, bookmarks]) => {
      const selectedBooker = bookmarks.filter(bookmark => bookmark.group === group);
      return of(new GetBookmarkSuccess(selectedBooker));
    })
  );

  @Effect()
  getBookmarkers$ = this._actions$.pipe(
    ofType<GetBookmarks>(EBookmarkActions.GetBookmarks),
    switchMap(() =>  this._bookmarksService.getBookmarks() ),
    switchMap((bookmarks: Bookmarks) => of(new GetBookmarksSuccess(bookmarks.bookmarks)))
  );


  constructor(
    private _bookmarksService: BookmarksService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
