import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  constructor() {

  }

  public ngOnInit(): void {

  }

  public onIncrement() {
    this.counter++;
  }

  public onDecrement() {
    this.counter--;
  }

  public onReset() {
    this.counter = 0;
  }
}
