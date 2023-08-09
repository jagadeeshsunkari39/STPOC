import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'hrservices',
    loadChildren: () => import('./feature/hr-services/hr-services.module').then(m => m.HrServicesModule)
  },
  {
    path:'adminservices',
    loadChildren: () => import('./feature/admin-services/admin-services.module').then(m => m.AdminServicesModule)
  },
  {
    path:'facilityServices',
    loadChildren: () => import('./feature/facility-services/facility-services.module').then(m => m.FacilityServicesModule)
  },
  {
    path:'financeServices',
    loadChildren: () => import('./feature/finance-services/finance-services.module').then(m => m.FinanceServicesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
