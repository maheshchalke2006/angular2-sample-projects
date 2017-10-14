import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userList: any[];
  constructor( @Inject(Http) private httpProxy: Http) { }

  ngOnInit() {
    this.httpProxy.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log('Success' + data.json());
        this.userList = data.json();
      }, (error) => {
        console.log('Error' + error);
      }, () => {
        console.log('End Response');
      });
  }

}
