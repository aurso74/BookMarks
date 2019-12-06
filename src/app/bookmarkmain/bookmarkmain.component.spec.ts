import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkmainComponent } from './bookmarkmain.component';

describe('BookmarkmainComponent', () => {
  let component: BookmarkmainComponent;
  let fixture: ComponentFixture<BookmarkmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
