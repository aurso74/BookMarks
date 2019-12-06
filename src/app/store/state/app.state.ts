import { RouterReducerState } from '@ngrx/router-store';

import { IBookmarkState, initialBookmarkState } from './bookmark.state';


export interface IAppState {
  router?: RouterReducerState;
  bookmarks: IBookmarkState;
}

export const initialAppState: IAppState = {
  bookmarks: initialBookmarkState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
