import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  first: any;
  second: any;

  firstInput = 0;
  secondInput = 0;

  getFirstInput(value: string) {
    this.firstInput = parseInt(value);

    if (!isNaN(this.firstInput)) {
      this.first = this.firstInput;
      console.log(this.firstInput);
    }
  }

  getSecondInput(value: string) {
    this.secondInput = parseInt(value);

    if (!isNaN(this.secondInput)) {
      this.second = this.secondInput;
      console.log(this.secondInput);
    }
  }

  ngOnInit() {}
}
