import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBigTextComponent } from './main-page-big-text.component';

describe('MainPageBigTextComponent', () => {
  let component: MainPageBigTextComponent;
  let fixture: ComponentFixture<MainPageBigTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageBigTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
