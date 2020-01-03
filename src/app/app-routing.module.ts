import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApexChartsComponent} from './apex-charts/apex-charts.component';

const routes: Routes = [
  { path: 'apex-charts', component: ApexChartsComponent},
  { path: '', redirectTo: '/apex-charts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
