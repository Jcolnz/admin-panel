import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// material imports
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import 'hammerjs';

// components
import { DataService } from './data.service';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { ApexHomeHeaderSectionComponent } from './apex-charts/apex-home-header-section/apex-home-header-section.component';
import { ApexHomeMiddleSectionComponent } from './apex-charts/apex-home-middle-section/apex-home-middle-section.component';
import { ApexHomeBottomSectionComponent } from './apex-charts/apex-home-bottom-section/apex-home-bottom-section.component';

import { SeriesPipe } from './apex-charts/apex-home-header-section/series.pipe';
import { ApexGroupedBarComponent } from './apex-charts/apex-graphs/old-graphs/apex-grouped-bar/apex-grouped-bar.component';
import { ApexNormalizedHorizontalBarComponent } from './apex-charts/apex-graphs/old-graphs/apex-normalized-horizontal-bar/apex-normalized-horizontal-bar.component';
import { ApexDomainsGraphComponent } from './apex-charts/apex-graphs/old-graphs/apex-domains-graph/apex-domains-graph.component';
import { ApexBsnGraphComponent } from './apex-charts/apex-graphs/old-graphs/apex-bsn-graph/apex-bsn-graph.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SendMessagesSecurelyComponent } from './apex-charts/apex-graphs/send-messages-securely/send-messages-securely.component';
import { TwoFaComponent } from './apex-charts/apex-graphs/two-fa/two-fa.component';
import { DomainCommunicationComponent } from './apex-charts/apex-graphs/domain-communication/domain-communication.component';


@NgModule({
  declarations: [
    AppComponent,
    ApexChartsComponent,
    ApexHomeHeaderSectionComponent,
    ApexHomeMiddleSectionComponent,
    ApexHomeBottomSectionComponent,
    SeriesPipe,
    ApexGroupedBarComponent,
    ApexNormalizedHorizontalBarComponent,
    ApexDomainsGraphComponent,
    ApexBsnGraphComponent,
    FilteringComponent,
    SendMessagesSecurelyComponent,
    TwoFaComponent,
    DomainCommunicationComponent
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
    MatInputModule,
    NgxChartsModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SeriesPipe
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
