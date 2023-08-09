import { animate, group, keyframes, stagger, state, style, transition, trigger, query as q } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TileList } from '../common/Constants/tile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translatex(-100%)'}),
        animate('500ms ease-in', style({transform:'translatex(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform:'translatex(-100%)'}))
      ])
    ]),
    trigger('fadeInAnimation', [
      transition(':enter', [
          style({ opacity: 0 }),
          animate('.7s', style({transform:'translatex(50%)', opacity: 2 }))
      ]),
    ]),
    trigger('listAnimation', [
      transition('*=>*', [
        q(':enter', style({opacity:0}), ({optional:true})),
        q(':enter', stagger('300ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity:0, transform:'translatex(-50%)', offset:0}),
            style({opacity:0.5, transform:'translatex(-25%)', offset:0.3}),
            style({opacity:1, transform:'translatex(0%)', offset:0.5})
          ]))
        ]), {optional:true})
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(80px)', opacity: 0 }),
        group([
          animate('0.5s 0.3s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.5s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.5s 0.4s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  tileList:any[] = []

  constructor(
    private router:Router
  ){}

  ngOnInit() : void {
    let userDetails:any = localStorage.getItem('userDetails')
    let data = JSON.parse(userDetails).roles;
    this.tileList = TileList.filter((e:any) => {
      return data.includes(e.role)
    });
  }

  onClickTile(route:string){
    this.router.navigateByUrl(route)
  }
}
