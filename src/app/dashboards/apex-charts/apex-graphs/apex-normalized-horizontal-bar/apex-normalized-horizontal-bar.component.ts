import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexChart, ChartComponent} from 'ng-apexcharts';
import {ApexBarSeries, DataService} from '../../../../data.service';
import * as data from '../../../../data';

@Component({
  selector: 'app-apex-normalized-horizontal-bar',
  templateUrl: './apex-normalized-horizontal-bar.component.html',
  styleUrls: ['./apex-normalized-horizontal-bar.component.scss']
})
export class ApexNormalizedHorizontalBarComponent implements OnInit {

  @ViewChild('chart', {static: false}) chart: ChartComponent;
  @ViewChild('chart2', {static: false}) chart2: ChartComponent;

  public chartOptions = {
    chartDetails: {
      height: 225,
      stacked: true,
      stackType: '100%',
      type: 'bar',
      width: 600
    },
    colors: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC'],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    legend: {
      position: 'top',
      onItemHover: {
        highlightDataSeries: true
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };

  public data: ApexBarSeries;
  public data2: ApexBarSeries;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.apex2faData();
    this.data2 = this.dataService.apexVerificationData();
    console.log(this.data2);
    this.data = {
      ...this.data,
      xaxis: {
        title: {
          text: '% of sent ZIVVER messages'
        }
      }
    };
    this.data2 = {
      ...this.data2,
      xaxis: {
        title: {
          text: '% of sent ZIVVER messages'
        }
      }
    };
  }
}
