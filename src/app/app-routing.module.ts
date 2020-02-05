import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApexChartsComponent} from './apex-charts/apex-charts.component';

const routes: Routes = [
  { path: 'admin-dashboard', component: ApexChartsComponent},
  { path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
