import { Component, Input, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: { counter: number } }>) {
  }

  public ngOnInit(): void {
    this.store.select('counter').subscribe(data =>{
      this.counter = data.counter;
    });
  }

}
