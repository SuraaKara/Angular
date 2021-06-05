import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageArticleComponent } from './main-page-article.component';

describe('MainPageArticleComponent', () => {
  let component: MainPageArticleComponent;
  let fixture: ComponentFixture<MainPageArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
