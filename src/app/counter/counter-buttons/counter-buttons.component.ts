import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent implements OnInit {
  
  @Output('increment') increment = new EventEmitter<void>();
  @Output('decrement') decrement = new EventEmitter<void>();
  @Output('reset') reset = new EventEmitter<void>();  
  
  public ngOnInit(){

  }
  
  public onIncrement(){
    this.increment.emit()
  }
  
  public onDecrement(){ 
    this.decrement.emit();
  }

  public onReset(){
    this.reset.emit();
  }
}
