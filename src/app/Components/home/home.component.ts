import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 2;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 850) ? 1 : 2;
  }

}

