import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCompanyComponent } from './main-page-company.component';

describe('MainPageCompanyComponent', () => {
  let component: MainPageCompanyComponent;
  let fixture: ComponentFixture<MainPageCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
