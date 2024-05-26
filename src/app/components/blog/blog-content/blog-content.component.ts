import { Component, Input } from '@angular/core';
import { ShareModule } from '../../../modules/share.module';
import { Blog } from '../../../types/Blog';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.scss',
})
export class BlogContentComponent {
  @Input() blog!: Blog;
}
