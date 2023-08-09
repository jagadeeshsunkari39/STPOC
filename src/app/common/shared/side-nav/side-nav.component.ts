import { Component } from '@angular/core';
import { SideNavMenu } from '../../Constants/side-nav-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  menuItems = SideNavMenu
}
