import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-ai',
  templateUrl: './what-is-ai.component.html',
  styleUrls: ['./what-is-ai.component.css']
})
export class WhatIsAiComponent implements OnInit {

  breakpoint: number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 2;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 850) ? 1 : 2;
  }

}
