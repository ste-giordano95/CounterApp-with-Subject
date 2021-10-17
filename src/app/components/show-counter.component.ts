import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  template: `
   <div class="d-flex flex-column align-items-center">
    <h1>Counter App</h1>
    
    <h2>{{counter.getCount()}}</h2>
    
    </div>
  `,
  styles: [
  ]
})
export class ShowCounterComponent implements OnInit {

  constructor(public counter: CounterService) { }

  ngOnInit(): void {
  }

}
