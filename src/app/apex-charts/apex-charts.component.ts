import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ExportDialogComponent } from '../export-dialog/export-dialog.component';

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  public openDialog() {
    this.dialog.open(ExportDialogComponent, {
      width: '400px'
    });
  }
}
