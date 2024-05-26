import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { LipperData } from '../../../types/Lipper';
import { ShareModule } from '../../../modules/share.module';

@Component({
  selector: 'app-lipper-table',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './lipper-table.component.html',
  styleUrl: './lipper-table.component.scss',
})
export class LipperTableComponent implements OnChanges {
  @Input() rankName!: string;
  @Input() data!: Array<LipperData>;
  public visibleToggleList: Array<boolean>;
  constructor() {
    this.visibleToggleList = [];
  }
  public ngOnChanges(changes: { data: SimpleChange }): void {
    if (changes.data.currentValue === changes.data.previousValue) return;
    if (!Array.isArray(changes.data.currentValue)) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.visibleToggleList = changes.data.currentValue.map((item: LipperData) => false);
  }
  public onTobbleClick(index: number): void {
    if (this.visibleToggleList.length < 0) return;
    this.visibleToggleList[index] = !this.visibleToggleList[index];
  }
}
