import { Component, OnInit } from '@angular/core';
import { multi } from '../../../../data';

@Component({
  selector: 'app-ngx-grouped-bar',
  templateUrl: './ngx-grouped-bar.component.html',
  styleUrls: ['./ngx-grouped-bar.component.scss']
})
export class NgxGroupedBarComponent implements OnInit {
  view: any[] = [600, 400];
  multi: any[];
  test: any[];

  // options
  legendPosition = 'below';
  showDataLabel = false;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Week Starting';
  yAxisLabel = 'Messages sent';

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC']
  };

  constructor() {
    this.multi = multi;
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    console.log(multi);
  }
}
