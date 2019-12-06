import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IBookmarkState } from '../state/bookmark.state';

const selectBookmarks = (state: IAppState) => state.bookmarks;

export const selectBookmarkList = createSelector(
  selectBookmarks,
  (state: IBookmarkState) => state.bookmarks
);

export const selectSelectedBookmark = createSelector(
  selectBookmarks,
  (state: IBookmarkState) => state.selectedBookmark
);
