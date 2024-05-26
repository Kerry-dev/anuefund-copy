import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { SectionTitleComponent } from '../components/section-title/section-title.component';
import { DateTimePipe } from '../pipes/date-time.pipe';
import { CommonModule } from '@angular/common';
import { NumberFixedPipe } from '../pipes/number-fixed.pipe';
@NgModule({
  declarations: [],
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons), SectionTitleComponent, DateTimePipe, NumberFixedPipe],
  exports: [CommonModule, NgxBootstrapIconsModule, SectionTitleComponent, DateTimePipe, NumberFixedPipe],
})
export class ShareModule {}
