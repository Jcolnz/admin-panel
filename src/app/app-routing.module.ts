import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './dashboards/ngx-charts/ngx-charts.component';
import {ApexChartsComponent} from './dashboards/apex-charts/apex-charts.component';
import {Ng2ChartsComponent} from './dashboards/ng2-charts/ng2-charts.component';

const routes: Routes = [
  { path: 'ngx-charts', component: NgxChartsComponent},
  { path: 'apex-charts', component: ApexChartsComponent},
  { path: 'ng2-charts', component: Ng2ChartsComponent},
  { path: '', redirectTo: '/ngx-charts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
