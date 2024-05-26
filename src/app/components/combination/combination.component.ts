import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { CombinationContentComponent } from './combination-content/combination-content.component';
import { Combination } from '../../types/Combination';
import { mockCombination } from './mockData';

@Component({
  selector: 'app-combination',
  standalone: true,
  imports: [ShareModule, CombinationContentComponent],
  templateUrl: './combination.component.html',
  styleUrl: './combination.component.scss',
})
export class CombinationComponent {
  public data: Array<Combination>;
  constructor() {
    this.data = mockCombination;
  }
}
