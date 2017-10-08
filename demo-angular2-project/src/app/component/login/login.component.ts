import { Component, OnInit, Inject } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  constructor(@Inject(LoginService) private loginService: LoginService) {  }

  ngOnInit() {
  }

  login() {
    console.log('username is ' + this.username);
    this.loginService.userName = this.username;
  }

}
