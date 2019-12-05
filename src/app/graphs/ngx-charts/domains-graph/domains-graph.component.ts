import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-domains-graph',
  templateUrl: './domains-graph.component.html',
  styleUrls: ['./domains-graph.component.scss']
})
export class DomainsGraphComponent implements OnInit {

  domainsData: any[] = [];
  view = [900, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number of messages';
  showYAxisLabel = true;
  yAxisLabel = 'Domain';
  showDataLabel = true;

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC']
  };

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.domainsData = this.dataService.parsedData;
  }
}
