import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationContentComponent } from './combination-content.component';

describe('CombinationContentComponent', () => {
  let component: CombinationContentComponent;
  let fixture: ComponentFixture<CombinationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombinationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
