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

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import 'hammerjs';

// components
import { HomeHeaderSectionComponent } from './dashboards/ngx-charts/home-header-section/home-header-section.component';
import { HomeMiddleSectionComponent } from './dashboards/ngx-charts/home-middle-section/home-middle-section.component';
import { NormalizedHorizontalBarComponent } from './dashboards/ngx-charts/ngx-graphs/normalized-horizontal-bar/normalized-horizontal-bar.component';
import { DataService } from './data.service';
import { DomainsGraphComponent } from './dashboards/ngx-charts/ngx-graphs/domains-graph/domains-graph.component';
import { BusinessRulesComponent } from './dashboards/ngx-charts/ngx-graphs/business-rules/business-rules.component';
import { SparklinesComponent } from './dashboards/ngx-charts/ngx-graphs/sparklines/sparklines.component';
import { AdvancedPieComponent } from './dashboards/ngx-charts/ngx-graphs/advanced-pie/advanced-pie.component';
import { HomeBottomSectionComponent } from './dashboards/ngx-charts/home-bottom-section/home-bottom-section.component';
import { CardsComponent } from './dashboards/ngx-charts/ngx-graphs/cards/cards.component';
import { NgxChartsComponent } from './dashboards/ngx-charts/ngx-charts.component';
import { NgxGroupedBarComponent } from './dashboards/ngx-charts/ngx-graphs/ngx-grouped-bar/ngx-grouped-bar.component';
import { ApexChartsComponent } from './dashboards/apex-charts/apex-charts.component';
import { ApexHomeHeaderSectionComponent } from './dashboards/apex-charts/apex-home-header-section/apex-home-header-section.component';
import { ApexHomeMiddleSectionComponent } from './dashboards/apex-charts/apex-home-middle-section/apex-home-middle-section.component';
import { ApexHomeBottomSectionComponent } from './dashboards/apex-charts/apex-home-bottom-section/apex-home-bottom-section.component';

import { SeriesPipe } from './dashboards/apex-charts/apex-home-header-section/series.pipe';
import { Ng2ChartsComponent } from './dashboards/ng2-charts/ng2-charts.component';
import { ApexGroupedBarComponent } from './dashboards/apex-charts/apex-graphs/apex-grouped-bar/apex-grouped-bar.component';
import { ApexNormalizedHorizontalBarComponent } from './dashboards/apex-charts/apex-graphs/apex-normalized-horizontal-bar/apex-normalized-horizontal-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxGroupedBarComponent,
    HomeHeaderSectionComponent,
    HomeMiddleSectionComponent,
    NormalizedHorizontalBarComponent,
    DomainsGraphComponent,
    BusinessRulesComponent,
    SparklinesComponent,
    AdvancedPieComponent,
    HomeBottomSectionComponent,
    CardsComponent,
    NgxChartsComponent,
    ApexChartsComponent,
    ApexHomeHeaderSectionComponent,
    ApexHomeMiddleSectionComponent,
    ApexHomeBottomSectionComponent,
    SeriesPipe,
    Ng2ChartsComponent,
    ApexGroupedBarComponent,
    ApexNormalizedHorizontalBarComponent
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
