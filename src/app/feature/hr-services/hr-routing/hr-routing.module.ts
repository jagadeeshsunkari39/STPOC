import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrservicesHomeComponent } from '../hrservices-home/hrservices-home.component';

const routes:Routes = [
  {
    path:'',
    component:HrservicesHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
