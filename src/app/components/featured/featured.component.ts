import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { Lipper } from '../../types/Lipper';
import { mockLipper } from '../lipper/mockData';
import { FeaturedTableComponent } from './featured-table/featured-table.component';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [ShareModule, FeaturedTableComponent],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
  public activeId: number;
  public data: Array<Lipper>;
  constructor() {
    this.activeId = 1;
    this.data = mockLipper;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onSelectClick(e: any): void {
    this.activeId = e.target.value;
  }
}
