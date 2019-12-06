import { Action } from '@ngrx/store';

import { Bookmark } from '../../models/bookmark.interface';

export enum EBookmarkActions {
  GetBookmarks = '[Bookmark] Get Bookmarks',
  GetBookmarksSuccess = '[Bookmark] Get Bookmarks Success',
  GetBookmark = '[Bookmark] Get Bookmark',
  GetBookmarkSuccess = '[Bookmark] Get Bookmark Success'
}

export class GetBookmarks implements Action {
  public readonly type = EBookmarkActions.GetBookmarks;
}

export class GetBookmarksSuccess implements Action {
  public readonly type = EBookmarkActions.GetBookmarksSuccess;
  constructor(public payload: Bookmark[]) {}
}

export class GetBookmark implements Action {
  public readonly type = EBookmarkActions.GetBookmark;
  constructor(public payload: string) {}
}

export class GetBookmarkSuccess implements Action {
  public readonly type = EBookmarkActions.GetBookmarkSuccess;
  constructor(public payload: Bookmark[]) {}
}


export type BookmarkActions = GetBookmarks | GetBookmarksSuccess | GetBookmark | GetBookmarkSuccess ;
