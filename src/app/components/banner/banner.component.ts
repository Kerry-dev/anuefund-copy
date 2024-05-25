import { Component } from '@angular/core';
import { Banner } from '../../types/Banner';
import { mockData } from './mockBanner';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../modules/share.module';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ShareModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  public data: Array<Banner>;
  constructor() {
    this.data = mockData;
  }
}
