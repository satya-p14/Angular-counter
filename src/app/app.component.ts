import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { CounterComponent } from "./counter/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit , OnChanges , DoCheck , AfterViewInit ,AfterContentInit ,AfterViewChecked , AfterContentChecked ,OnDestroy {
  title = 'Counter';

  constructor(){
    console.log("constructor");  } 
  
  
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges " ,  changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  
    
}
