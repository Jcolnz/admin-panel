import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material imports
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { GraphComponent } from './graphs/ngx-charts/graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import 'hammerjs';
import { HomeHeaderSectionComponent } from './home-header-section/home-header-section.component';
import { HomeMiddleSectionComponent } from './home-middle-section/home-middle-section.component';
import { NormalizedHorizontalBarComponent } from './graphs/ngx-charts/normalized-horizontal-bar/normalized-horizontal-bar.component';
import { DataService } from './data.service';
import { DomainsGraphComponent } from './graphs/ngx-charts/domains-graph/domains-graph.component';
import { BusinessRulesComponent } from './graphs/ngx-charts/business-rules/business-rules.component';
import { SparklinesComponent } from './graphs/ngx-charts/sparklines/sparklines.component';
import { AdvancedPieComponent } from './graphs/ngx-charts/advanced-pie/advanced-pie.component';
import { HomeBottomSectionComponent } from './home-bottom-section/home-bottom-section.component';
import { CardsComponent } from './graphs/ngx-charts/cards/cards.component';
import { NgxChartsComponent } from './dashboards/ngx-charts/ngx-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HomeHeaderSectionComponent,
    HomeMiddleSectionComponent,
    NormalizedHorizontalBarComponent,
    DomainsGraphComponent,
    BusinessRulesComponent,
    SparklinesComponent,
    AdvancedPieComponent,
    HomeBottomSectionComponent,
    CardsComponent,
    NgxChartsComponent
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
    NgxChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
