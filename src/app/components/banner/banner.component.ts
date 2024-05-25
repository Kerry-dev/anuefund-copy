import { Component, OnInit, ViewChild } from '@angular/core';
import { Banner } from '../../types/Banner';
import { mockBanner, mockHighChart } from './mockData';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../modules/share.module';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
import { map } from 'lodash-es';
import { JsonObject } from '../../types/common';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ShareModule, NgbCarouselModule, HighchartsChartModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  public bannerData: Array<Banner>;
  public paused: boolean;
  public unpauseOnArrow: boolean;
  public pauseOnIndicator: boolean;
  public pauseOnHover: boolean;
  public pauseOnFocus: boolean;
  public chartOptions: Highcharts.Options | null;
  public Highcharts: typeof Highcharts;
  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;
  constructor() {
    this.bannerData = mockBanner;
    this.paused = false;
    this.unpauseOnArrow = false;
    this.pauseOnIndicator = false;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.chartOptions = null;
    this.Highcharts = Highcharts;
  }

  public ngOnInit(): void {
    // const highChartData: Highcharts.PointOptionsObject[] = map<JsonObject<number>, Highcharts.PointOptionsObject>(
    //   mockHighChart,
    //   (val: number, key: string) => {
    //       y: val,
    //       title: key,
    //     } as Highcharts.PointOptionsObject;
    //   },
    // );
    const highChartData: Array<number> = map<JsonObject<number>, number>(
      mockHighChart,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (val: number, key: string) => val,
    );
    this.chartOptions = {
      chart: {
        height: 300,
        type: 'line',
        backgroundColor: 'transparent',
      },
      title: {
        text: '',
      },
      series: [
        {
          type: 'line',
          data: highChartData,
        },
      ],
      legend: { enabled: false },
      responsive: {
        rules: [
          {
            condition: { maxWidth: 408 },
            chartOptions: {
              chart: {
                height: 224,
                width: null,
              },
            },
          },
          {
            condition: { minWidth: 700 },
            chartOptions: {
              chart: {
                height: 300,
                width: null,
              },
            },
          },
        ],
      },
    };
  }

  public togglePaused(): void {
    if (!this.carousel) return;
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  public onSlide(slideEvent: NgbSlideEvent): void {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
