import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ChartComponent} from 'ng-apexcharts';

@Component({
  selector: 'app-apex-home-header-section',
  templateUrl: './apex-home-header-section.component.html',
  styleUrls: ['./apex-home-header-section.component.scss']
})
export class ApexHomeHeaderSectionComponent implements OnInit {
  @ViewChild('chart', {static: false}) chart: ChartComponent;

  public chartDetails = {
    type: 'line',
    width: '100%',
    height: 200
  };
  public colors = ['#0B74E7'];
  public series = [{
    name: 'Series 1',
    data: [23, 34, 12, 54, 32, 43]
  }];
  public xaxis = {
    categories: [
      '01 Jan',
      '02 Jan',
      '03 Jan',
      '04 Jan',
      '05 Jan',
      '06 Jan'
      ]
  };

  constructor() {
  }

  ngOnInit() {
  }
}
