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
    colors: ['rgb(11,116,231)', 'rgb(0,186,155)'],
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
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
