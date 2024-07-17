import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent, CustomCounterInputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  constructor() {

  }

  public ngOnInit(): void {

  }
}
