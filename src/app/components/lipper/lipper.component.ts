import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Lipper } from '../../types/Lipper';
import { mockLipper } from './mockData';
import { LipperTableComponent } from './lipper-table/lipper-table.component';

@Component({
  selector: 'app-lipper',
  standalone: true,
  imports: [ShareModule, NgbNavModule, LipperTableComponent],
  templateUrl: './lipper.component.html',
  styleUrl: './lipper.component.scss',
})
export class LipperComponent {
  public activeId: number;
  public data: Array<Lipper>;
  constructor() {
    this.activeId = 1;
    this.data = mockLipper;
  }
}
