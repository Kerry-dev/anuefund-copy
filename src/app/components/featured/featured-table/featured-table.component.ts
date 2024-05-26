import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ShareModule } from '../../../modules/share.module';
import { LipperData } from '../../../types/Lipper';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-featured-table',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './featured-table.component.html',
  styleUrl: './featured-table.component.scss',
})
export class FeaturedTableComponent implements OnChanges {
  @Input() rankName!: string;
  @Input() data!: Array<LipperData>;
  public visibleToggleList: Array<boolean>;
  public orderBy: string;
  public isDesc: boolean;
  public listChange$: Observable<Array<LipperData>>;
  private _listChange$: BehaviorSubject<Array<LipperData>>;
  constructor() {
    this.visibleToggleList = [];
    this.orderBy = '';
    this.isDesc = false;
    this._listChange$ = new BehaviorSubject<Array<LipperData>>([]);
    this.listChange$ = this._listChange$.asObservable();
  }
  public ngOnChanges(changes: { data: SimpleChange }): void {
    if (changes.data.currentValue === changes.data.previousValue) return;
    if (!Array.isArray(changes.data.currentValue)) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.visibleToggleList = changes.data.currentValue.map((item: LipperData) => false);
    this._listChange$.next(this.data);
  }
  public onTobbleClick(index: number): void {
    if (this.visibleToggleList.length < 0) return;
    this.visibleToggleList[index] = !this.visibleToggleList[index];
  }
  public onSortClick(key: keyof LipperData): void {
    if (this.data.length == 0) return;
    let isDesc = this.isDesc;
    if (this.orderBy === key) {
      isDesc = !this.isDesc;
    } else {
      this.orderBy = key;
      isDesc = false;
    }
    this.isDesc = isDesc;
    const sort: Array<LipperData> = this.data.sort((a, b) => {
      const varA = a[key];
      const varB = b[key];
      let comparison = 0;
      if (varA === null || varB === null) {
        comparison = -1;
      } else {
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
      }
      return isDesc ? comparison * -1 : comparison;
    });
    this._listChange$.next(sort);
  }
}
