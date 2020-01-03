import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {DataService} from '../../../../data.service';

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

  //public data: ApexBarSeries;
  //public data2: ApexBarSeries;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
   /* this.data2 = this.dataService.apexVerificationData();

    this.data2 = {
      ...this.data2,
      xaxis: {
        title: {
          text: '% of sent ZIVVER messages'
        }
      }
    };*/
  }
}
