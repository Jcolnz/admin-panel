import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ApexOptions } from 'ng-apexcharts';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-domain-communication',
  templateUrl: './domain-communication.component.html',
  styleUrls: ['./domain-communication.component.scss']
})
export class DomainCommunicationComponent implements OnInit {

  @ViewChild('communicationDomains', {static: false}) communicationDomains: ChartComponent;

  public chartOptions = {
    chartDetails: {
      height: 450,
      stacked: true,
      type: 'bar',
    },
    colors: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC'],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      fontSize: '14px',
      onItemHover: {
        highlightDataSeries: true
      }
    },
    tooltip: {
      x: {
        show: false
      }
    },
    noData: {
      text: 'No data Available',
      align: 'center',
      verticalAlign: 'middle'
    }
  };


  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.data.domainData();
  }
}
