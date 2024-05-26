import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public isActive: boolean;
  constructor() {
    this.isActive = false;
  }

  public onTobbleClick(currentStatus: boolean = this.isActive): void {
    this.isActive = !currentStatus;
  }
}
