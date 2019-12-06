import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFrmComponent } from './bookmark-frm.component';

describe('BookmarkFrmComponent', () => {
  let component: BookmarkFrmComponent;
  let fixture: ComponentFixture<BookmarkFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
