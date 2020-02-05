import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// material imports
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import 'hammerjs';

// components
import { DataService } from './data.service';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SendMessagesSecurelyComponent } from './apex-charts/apex-graphs/send-messages-securely/send-messages-securely.component';
import { TwoFaComponent } from './apex-charts/apex-graphs/two-fa/two-fa.component';
import { DomainCommunicationComponent } from './apex-charts/apex-graphs/domain-communication/domain-communication.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { DataCardComponent } from './apex-charts/data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ApexChartsComponent,
    FilteringComponent,
    SendMessagesSecurelyComponent,
    TwoFaComponent,
    DomainCommunicationComponent,
    ExportDialogComponent,
    DataCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    NgxChartsModule,
    NgApexchartsModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [DataService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
entryComponents: [
  ExportDialogComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }
