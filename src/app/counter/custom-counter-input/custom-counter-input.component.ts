import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent {
  public counterValue:number = 0;
  
  constructor(private store:Store<{counter:counterState}>){
  }
  
  public onAdd() {
    console.log(this.counterValue);
    this.store.dispatch(customIncrement({counterValue : this.counterValue}));
  }
    

}
