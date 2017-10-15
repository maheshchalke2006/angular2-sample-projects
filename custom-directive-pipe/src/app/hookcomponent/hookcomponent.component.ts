import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-hookcomponent',
  templateUrl: './hookcomponent.component.html',
  styleUrls: ['./hookcomponent.component.css']
})
export class HookcomponentComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit hook fired');
  }

  ngOnChanges() {
    console.log('Hook onChanges');
  }

  ngAfterContentInit() {
    console.log('Hook afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Hook contentChecked');
  }

  ngAfterViewInit() {
    console.log('Hook afterViewInit');
  }
}
