import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  public form = this.fb.group({
    startDate: [new Date('10/1/2019')],
    endDate: [new Date()],
    organization: ['']
  });
  public organizationUnits: string[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.organizationUnits = this.dataService.organizationUnits;
  }

  public filterData(): void {
    this.dataService.filterData(this.startDate, this.endDate, this.organization);
  }

  public resetData() {
    this.form.reset();
    this.refreshData();
  }

  public refreshData() {
    this.dataService.twoFactorData();
    this.dataService.verificationMethodData();
    this.dataService.domainData();
    this.dataService.secureDomainData();
    this.dataService.messageClassificationData();
    this.dataService.triggeredBusinessRulesData();
  }

  get startDate() {
    return this.form.get('startDate').value;
  }

  get endDate() {
    return this.form.get('endDate').value;
  }

  get organization() {
    return this.form.get('organization').value;
  }
}
