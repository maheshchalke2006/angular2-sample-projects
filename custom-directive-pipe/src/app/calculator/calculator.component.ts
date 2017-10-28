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
    this.result = parseInt(this.n1.toString()) + parseInt(this.n2.toString());
  }

}
