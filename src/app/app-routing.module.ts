import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookmarkFrmComponent } from './bookmark-frm/bookmark-frm.component';
import { BookmarkmainComponent } from './bookmarkmain/bookmarkmain.component';

/*const routes: Routes = [
  { path: 'bookmarks', component: AppComponent },
  { path: 'bookmark-frm', component: BookmarkFrmComponent },
  { path: '', redirectTo: '/bookmarks', pathMatch: 'full' }
];*/

const routes: Routes = [
  { path: 'bookmark-frm', component: BookmarkFrmComponent },
  { path: 'bookmarkmain', component: BookmarkmainComponent},
  { path: '', redirectTo: '/bookmarkmain', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
