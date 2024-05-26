import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { LipperComponent } from './components/lipper/lipper.component';
import { CombinationComponent } from './components/combination/combination.component';
import { FeaturedComponent } from './components/featured/featured.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    BlogComponent,
    LipperComponent,
    CombinationComponent,
    FeaturedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'anuefund-copy';
}
