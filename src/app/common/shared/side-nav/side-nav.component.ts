import { Component } from '@angular/core';
import { SideNavMenu } from '../../Constants/side-nav-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  menuItems = SideNavMenu

  constructor(
    private router: Router
  ){}

  onClickRoute(data:any){
    this.router.navigateByUrl(data.route)
  }
}
