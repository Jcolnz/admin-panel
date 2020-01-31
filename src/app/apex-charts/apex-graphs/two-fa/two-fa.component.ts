import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-two-fa',
  templateUrl: './two-fa.component.html',
  styleUrls: ['./two-fa.component.scss']
})
export class TwoFaComponent implements OnInit {

  @ViewChild('recipientsWithZIVVERAccount', {static: false}) recipientsWithZIVVERAccount: ChartComponent;
  @ViewChild('guestRecipientVerificationMethod', {static: false}) guestRecipientVerificationMethod: ChartComponent;

  public chartOptions = {
    chartDetails: {
      height: 250,
      stacked: true,
      stackType: '100%',
      type: 'bar'
    },
    colors: ['rgb(0, 54, 104)', 'rgb(251,116,61)', 'rgb(0,186,155)', 'rgb(144,19,254)'],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
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

  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.twoFactorData();
    this.data.verificationMethodData();
  }
}
