import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1 = 0;
  n2 = 0;
  result = 0;
  constructor() { }

  ngOnInit() {
  }

  sum() {
    this.result = this.n1 + this.n2;
  }

}
