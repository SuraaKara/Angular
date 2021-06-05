import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSmallTextComponent } from './main-page-small-text.component';

describe('MainPageSmallTextComponent', () => {
  let component: MainPageSmallTextComponent;
  let fixture: ComponentFixture<MainPageSmallTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSmallTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSmallTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
