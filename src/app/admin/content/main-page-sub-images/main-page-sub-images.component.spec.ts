import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSubImagesComponent } from './main-page-sub-images.component';

describe('MainPageSubImagesComponent', () => {
  let component: MainPageSubImagesComponent;
  let fixture: ComponentFixture<MainPageSubImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSubImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSubImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
