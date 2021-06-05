import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContentComponent } from './slider-content.component';

describe('SliderContentComponent', () => {
  let component: SliderContentComponent;
  let fixture: ComponentFixture<SliderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
