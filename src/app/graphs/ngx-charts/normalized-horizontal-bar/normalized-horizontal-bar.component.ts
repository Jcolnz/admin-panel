import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-normalized-horizontal-bar',
  templateUrl: './normalized-horizontal-bar.component.html',
  styleUrls: ['./normalized-horizontal-bar.component.scss']
})
export class NormalizedHorizontalBarComponent implements OnInit {
  view: any[] = [900, 200];
  messagesSent: any[];
  verificationMethods: any[];

  // options
  showXAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '% of sent ZIVVER messages';

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC']
  };

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.dataService.convert2FAArray();
    await this.dataService.convertVerificationType();

    this.messagesSent = this.dataService.convertedData;
    this.verificationMethods = this.dataService.verificationMethods;
  }

}
