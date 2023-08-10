import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrservicesHomeComponent } from './hrservices-home/hrservices-home.component';
import { HrRoutingModule } from './hr-routing/hr-routing.module';
import { SharedModule } from 'src/app/common/shared/shared/shared.module';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';



@NgModule({
  declarations: [
    HrservicesHomeComponent,
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule
  ]
})
export class HrServicesModule { }
