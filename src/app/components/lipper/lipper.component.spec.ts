import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipperComponent } from './lipper.component';

describe('LipperComponent', () => {
  let component: LipperComponent;
  let fixture: ComponentFixture<LipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
