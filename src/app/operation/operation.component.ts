import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  @Input() firstInput: any;
  @Input() secondInput: any;

  answer: any;
  result = 0;

  Add() {
    this.result = this.firstInput + this.secondInput;
    this.answer = this.result;
    console.log(this.result);
  }

  Subtract() {
    this.result = this.firstInput - this.secondInput;
    this.answer = this.result;
    console.log(this.result);
  }

  Multiply() {
    this.result = this.firstInput * this.secondInput;
    this.answer = this.result;
    console.log(this.result);
  }

  Divide() {
    this.result = this.firstInput / this.secondInput;
    this.answer = this.result;
    console.log(this.result);
  }
  ngOnInit(): void {}
}
