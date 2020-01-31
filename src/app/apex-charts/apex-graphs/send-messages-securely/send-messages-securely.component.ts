import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent} from 'ng-apexcharts';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-send-messages-securely',
  templateUrl: './send-messages-securely.component.html',
  styleUrls: ['./send-messages-securely.component.scss']
})
export class SendMessagesSecurelyComponent implements OnInit {

  @ViewChild('messageClassification', {static: false}) messageClassification: ChartComponent;
  @ViewChild('triggeredBusinessRules', {static: false}) triggeredBusinessRules: ChartComponent;
  @ViewChild('recipientDomain', {static: false}) recipientDomain: ChartComponent;

  public messageResult;
  public triggeredResult;
  public domainResult;

  public chartOptions = {
    chartDetails: {
      height: 450,
      stacked: true,
      type: 'bar',
    },
    colors: ['rgb(0, 54, 104)', 'rgb(11,116,231)', 'rgb(0,186,155)', 'rgb(144,19,254)'],
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

  public messageClassificationData: ApexOptions;
  public triggeredBusinessRulesData: ApexOptions;
  public recipientDomainData: ApexOptions;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.secureDomainData();
    this.dataService.messageClassificationData();
    this.dataService.triggeredBusinessRulesData();
  }
}
