import { Component } from '@angular/core';
import { ShareModule } from '../../modules/share.module';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { Blog } from '../../types/Blog';
import { mockBlog } from './mockData';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ShareModule, BlogContentComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  public data: Array<Blog>;
  constructor() {
    this.data = mockBlog;
  }
}
