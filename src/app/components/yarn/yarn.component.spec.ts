import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnComponent } from './yarn.component';

describe('YarnComponent', () => {
  let component: YarnComponent;
  let fixture: ComponentFixture<YarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
