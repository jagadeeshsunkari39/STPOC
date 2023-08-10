import { Component } from '@angular/core';
import { DashboardTile } from 'src/app/common/Constants/tile';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent {

  cardsList = DashboardTile
}
