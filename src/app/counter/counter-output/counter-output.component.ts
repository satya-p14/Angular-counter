import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = 0;  
  counterSubs!:Subscription
  constructor(private store: Store<{ counter: counterState }>) {
  } 

  public ngOnInit(): void {
    this.counterSubs = this.store.select('counter').subscribe(data =>{
      this.counter = data.counter;
    });
  }

  public ngOnDestroy(): void {
    this.counterSubs.unsubscribe();
  }

}
