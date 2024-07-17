import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counter: counterState }>) { }
  public ngOnInit() {}

  public onIncrement() {
    this.store.dispatch(increment());
  }

  public onDecrement() {
    this.store.dispatch(decrement());
  }

  public onReset() {
    this.store.dispatch(reset());
  }
}
