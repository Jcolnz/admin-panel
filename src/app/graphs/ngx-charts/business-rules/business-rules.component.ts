import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-business-rules',
  templateUrl: './business-rules.component.html',
  styleUrls: ['./business-rules.component.scss']
})
export class BusinessRulesComponent implements OnInit {

  businessRulesData: any[] = [];
  view = [900, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number of emails classified as sensitive';
  showYAxisLabel = true;
  yAxisLabel = 'Triggered business rule';
  showDataLabel = true;

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC']
  };

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.businessRulesData = this.dataService.businessRulesData;
  }
}
