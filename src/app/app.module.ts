import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { BookmarkEffects } from './store/effects/bookmark.effects';
import { BookmarksService } from './services/bookmarks.service';

import { MatNativeDateModule, MatAutocompleteModule, MatCheckboxModule, 
  MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';


import { MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkFrmComponent } from './bookmark-frm/bookmark-frm.component';
import { BookmarkmainComponent } from './bookmarkmain/bookmarkmain.component';

const modules: any[] = [
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    AppComponent,
    BookmarkFrmComponent,
    BookmarkmainComponent
  ],
  imports: [
    BrowserModule,
    modules,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookmarkEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [modules],
  providers: [BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
