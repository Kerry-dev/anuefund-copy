import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ShareModule],
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
