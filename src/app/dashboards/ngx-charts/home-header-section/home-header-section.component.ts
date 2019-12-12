import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-home-header-section',
  templateUrl: './home-header-section.component.html',
  styleUrls: ['./home-header-section.component.scss']
})
export class HomeHeaderSectionComponent implements OnInit {
  view = [100, 50];
  userDataSet = [];
  activeUserDataSet = [];
  emailsSentPerUser = [];
  randomData = [];
  colorScheme = {
    domain: ['#0B74E7']
  };
  colorScheme2 = {
    domain: ['#0B74E7', '#003668', '#00A9E0']
  };
  colorScheme3 = {
    domain: ['#003668']
  };

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.userDataSet = this.dataService.mockSingleSeriesData('Users', 1, 100, 12);
    this.activeUserDataSet = this.dataService.mockSingleSeriesData('Active Users', 1, 200, 24);
    this.emailsSentPerUser = this.dataService.mockSingleSeriesData('Emails per user', 1, 40, 48);
    this.randomData = this.dataService.mockSingleSeriesData('RandomData', 1, 50, 96);
  }

}
