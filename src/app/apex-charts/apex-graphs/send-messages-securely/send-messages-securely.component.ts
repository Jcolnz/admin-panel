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
