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
      width: 600
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
    }
  };

  public messageClassificationChart = {
    title: {
      align: 'center',
      text: 'Number of emails and % sent securely, by message classification',
      style: {
        fontSize: '16px'
      }
    } as ApexTitleSubtitle,
    xaxis: {
      title: {
        text: 'Number of emails'
      }
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Message classification'
      }
    } as ApexYAxis
  } as ApexOptions;

  public triggeredBusinessRulesChart = {
    title: {
      align: 'center',
      text: 'Number of emails and % sent securely, by triggered business rule',
      style: {
        fontSize: '16px'
      }
    } as ApexTitleSubtitle,
    xaxis: {
      title: {
        text: 'Number of emails classified as sensitive'
      }
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Triggered business rule'
      }
    } as ApexYAxis
  } as ApexOptions;

  public recipientDomainChart = {
    title: {
      align: 'center',
      text: 'Number of emails and % sent securely, by top 10 recipient domains',
      style: {
        fontSize: '16px'
      }
    } as ApexTitleSubtitle,
    xaxis: {
      title: {
        text: 'Number of emails classified as sensitive'
      }
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Recipient domain'
      }
    } as ApexYAxis
  } as ApexOptions;

  public messageClassificationData: ApexOptions;
  public triggeredBusinessRulesData: ApexOptions;
  public recipientDomainData: ApexOptions;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.messageClassificationData = this.dataService.sentSecurely(this.messageClassificationChart);
    this.messageResult = {...this.messageClassificationChart, ...this.messageClassificationData};

    this.triggeredBusinessRulesData = this.dataService.sentSecurely(this.triggeredBusinessRulesChart, true);
    this.triggeredResult = {...this.triggeredBusinessRulesChart, ...this.triggeredBusinessRulesData};

    this.recipientDomainData = this.dataService.sentSecurely(this.recipientDomainChart, undefined, true);
    this.domainResult = {...this.recipientDomainChart, ...this.recipientDomainData};
    console.log(this.domainResult);
  }
}
