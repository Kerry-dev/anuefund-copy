import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from '../../../modules/share.module';
import { Combination } from '../../../types/Combination';

@Component({
  selector: 'app-combination-content',
  standalone: true,
  imports: [ShareModule, NgbNavModule],
  templateUrl: './combination-content.component.html',
  styleUrl: './combination-content.component.scss',
})
export class CombinationContentComponent {
  public activeId: number;
  @Input() combination!: Combination;
  constructor() {
    this.activeId = 1;
  }
}
