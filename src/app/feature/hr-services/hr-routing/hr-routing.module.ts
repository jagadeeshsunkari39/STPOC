import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrservicesHomeComponent } from '../hrservices-home/hrservices-home.component';
import { HrDashboardComponent } from '../hr-dashboard/hr-dashboard.component';

const routes:Routes = [
  {
    path:'',
    component:HrservicesHomeComponent,
    children: [
      {
        path:'hr-dashboard',
        component:HrDashboardComponent
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
