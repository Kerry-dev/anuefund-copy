import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { Partner } from '../../types/Partner';
import { mockPartner } from './mockData';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
})
export class PartnerComponent {
  public data: Array<Array<Partner>>;
  constructor() {
    this.data = [];
    for (let i = 0; i < mockPartner.length; i += 5) {
      this.data.push(mockPartner.slice(i, i + 5));
    }
  }
}
