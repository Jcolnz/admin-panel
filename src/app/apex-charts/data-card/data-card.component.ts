import { DataService } from 'src/app/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {

  @ViewChild('lineGraph', {static: false}) recipientsWithZIVVERAccount: ChartComponent;

  public chartOptions = {
    chartDetails: {
      height: 400,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ['rgb(0, 54, 104)'],
    markers: {
      size: 3
    },
    dataLabels: {
      enabled: true
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
    },
    
  };


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataCardLine();
  }
}
