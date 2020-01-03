import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../../data.service';
import {ApexChart, ApexOptions, ChartComponent} from 'ng-apexcharts';

@Component({
  selector: 'app-apex-grouped-bar',
  templateUrl: './apex-grouped-bar.component.html',
  styleUrls: ['./apex-grouped-bar.component.scss']
})
export class ApexGroupedBarComponent implements OnInit {

  @ViewChild('chart', {static: false}) chart: ChartComponent;

  public data: ApexOptions;
  public colors: string[] = ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC'];
  public chartDetails: ApexChart = {
    height: 450,
    width: 600,
    type: 'bar'
  };
  public legend = {
    position: 'top',
    onItemClick: {
      toggleDataSeries: true
    },
    onItemHover: {
      highlightDataSeries: true
    }
  };

  constructor(private dataService: DataService) {
    //this.data = this.dataService.apexGroupedBarData();
  }

  ngOnInit() {
  }

}
