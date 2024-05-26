import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { SectionTitleComponent } from '../components/section-title/section-title.component';
import { DateTimePipe } from '../pipes/date-time.pipe';
@NgModule({
  declarations: [],
  imports: [NgxBootstrapIconsModule.pick(allIcons), SectionTitleComponent, DateTimePipe],
  exports: [NgxBootstrapIconsModule, SectionTitleComponent, DateTimePipe],
})
export class ShareModule {}
