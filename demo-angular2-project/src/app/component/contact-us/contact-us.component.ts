import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(@Inject(Router) private router: Router) { }

  ngOnInit() {
  }

  BackToHome() {
    console.log('Button Clicked');
    this.router.navigate(['/']);
  }

}
