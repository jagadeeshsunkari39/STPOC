import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup
  users: any;
  constructor(
    private service: CommonService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.getUser()
  }
  LoginAuthentication(form: any) {
    let user = this.users.find((ele: any) => ele.email === form.email && ele.password === form.password);
    localStorage.setItem('userDetails', JSON.stringify(user))
    if(user != undefined && user.roles?.length > 1) {
      this.router.navigateByUrl('/home')
    }else{
      if(user?.roles?.length === 1 && user.roles?.includes('hradmin')){
        this.router.navigateByUrl('/hrservices')
      }
    }
  }


  getUser() {
    this.service.getUsers().subscribe((users: any) => {
      this.users = users
    })
  }

}
