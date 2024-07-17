import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  counter$:Observable<counterState> = new Observable();
  constructor(private store: Store<{ counter: counterState }>) {
  } 

  public ngOnInit(): void {
    this.counter$ = this.store.select("counter");
  }

}
