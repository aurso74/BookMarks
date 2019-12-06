import { Bookmark } from '../../models/bookmark.interface';

export interface IBookmarkState {
  bookmarks: Bookmark[];
  selectedBookmark: Bookmark[];
}

export const initialBookmarkState: IBookmarkState = {
  bookmarks: null,
  selectedBookmark: null
};
