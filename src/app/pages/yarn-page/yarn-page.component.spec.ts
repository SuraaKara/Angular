import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnPageComponent } from './yarn-page.component';

describe('YarnPageComponent', () => {
  let component: YarnPageComponent;
  let fixture: ComponentFixture<YarnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
