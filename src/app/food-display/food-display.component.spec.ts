import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDisplayComponent } from './food-display.component';

describe('FoodDisplayComponent', () => {
  let component: FoodDisplayComponent;
  let fixture: ComponentFixture<FoodDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
