import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-of-ai',
  templateUrl: './danger-of-ai.component.html',
  styleUrls: ['./danger-of-ai.component.css']
})
export class DangerOfAiComponent implements OnInit {

  breakpoint: number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 2;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 850) ? 1 : 2;
  }

}
