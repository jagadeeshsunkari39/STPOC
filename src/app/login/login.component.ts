import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup
  users: any;
  constructor(private service: CommonService) {

  }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.getUser()
  }
  LoginAuthentication(form: any) {
    let user = this.users.find((ele: any) => ele.email === form.email);
    if(user != undefined) {
      
    }
  }


  getUser() {
    this.service.getUsers().subscribe((users: any) => {
      this.users = users
    })
  }

}
