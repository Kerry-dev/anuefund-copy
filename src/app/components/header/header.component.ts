import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isMenuActive: boolean;
  constructor() {
    this.isMenuActive = false;
  }
  public onMenuToggleClick(curSt: boolean = this.isMenuActive) {
    this.isMenuActive = !curSt;
  }
}
