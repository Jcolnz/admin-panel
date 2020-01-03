import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-apex-home-header-section',
  templateUrl: './apex-home-header-section.component.html',
  styleUrls: ['./apex-home-header-section.component.scss']
})
export class ApexHomeHeaderSectionComponent implements OnInit {
  @ViewChild('chart', {static: false}) chart: ChartComponent;

  public chartOptions = {
    chart: {
      type: 'line',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight'
    }
  };
  public colors = ['#0B74E7'];

  public userDataSet: ApexOptions;
  public activeUserDataSet: ApexOptions;
  public emailsSentPerUser: ApexOptions;
  public randomData: ApexOptions;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    //this.userDataSet = this.dataService.apexSparkline(1, 10, 12);
    //this.activeUserDataSet = this.dataService.apexSparkline(1, 20, 24);
    //this.emailsSentPerUser = this.dataService.apexSparkline(1, 30, 36);
    //this.randomData = this.dataService.apexSparkline(1, 40, 48);
  }
}
