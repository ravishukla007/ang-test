import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})


export class HomeComponentComponent implements OnInit {

  boxs = [];
  colors = ['red', 'green', 'blue', 'orange', 'red', 'green', 'blue', 'orange', 'red', 'green', 'blue', 'orange'];
  constructor() { }

  ngOnInit(): void {
  }

  createBox() {
    let positionLeft = this.randomNumber(0, 1000);
    let positionTop = this.randomNumber(0, 500);
    this.boxs.push({
      color : this.randomColor(),
      width: this.randomNumber(50, 200),
      height: this.randomNumber(50, 200),
      positionLeft: positionLeft.toString() + 'px',
      positionTop: positionTop.toString() + 'px',
    })

    console.log("positionLeft", positionLeft)
    console.log("positionTop", positionTop)
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomColor() {
    let randNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    return this.colors[randNumber];
  }
}
