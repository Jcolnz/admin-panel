import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './dashboards/ngx-charts/ngx-charts.component';
import {GraphComponent} from './graphs/ngx-charts/graph/graph.component';


const routes: Routes = [
  { path: 'ngx-charts', component: NgxChartsComponent},
  { path: 'apex-charts', component: GraphComponent},
  { path: '', redirectTo: '/ngx-charts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
