import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  dataNames = [
    {name: 'Admin Accounts', min: 1, max: 5},
    {name: 'User Accounts', min: 10, max: 250},
    {name: 'Average Active Daily Users', min: 5, max: 255},
    {name: 'Functional Accounts', min: 3, max: 15}
  ];

  colorScheme = {
    domain: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC']
  };
  data = [];

  view = [600, 400];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.mockMutliSingleSeriesData(this.dataNames);
  }

}
