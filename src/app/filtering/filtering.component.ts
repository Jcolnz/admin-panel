import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  form = this.fb.group({
    startDate: [new Date()],
    endDate: [new Date()]
  });

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
  }

  public filterData(): void {
    this.dataService.filterData(this.startDate, this.endDate);
  }

  public resetData() {
    this.form.reset();
    this.refreshData();
  }

  public refreshData() {
    this.dataService.twoFactorData();
    this.dataService.verificationMethodData();
    this.dataService.domainData();
  }

  public exportData(): void {

  }

  get startDate() {
    return this.form.get('startDate').value;
  }

  get endDate() {
    return this.form.get('endDate').value;
  }
}
