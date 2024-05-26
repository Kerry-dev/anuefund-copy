import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipperTableComponent } from './lipper-table.component';

describe('LipperTableComponent', () => {
  let component: LipperTableComponent;
  let fixture: ComponentFixture<LipperTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipperTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LipperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
