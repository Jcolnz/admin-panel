import { Component, OnInit } from '@angular/core';
import { multi } from '../../../data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  view: any[] = [900, 400];
  multi: any[];
  test: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Week Starting';
  showYAxisLabel = true;
  yAxisLabel = 'Messages sent';

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC', '#E6F7FC', '#E6F7FC', '#E6F7FC', '#E6F7FC', '#E6F7FC']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    console.log(multi);
  }
}
