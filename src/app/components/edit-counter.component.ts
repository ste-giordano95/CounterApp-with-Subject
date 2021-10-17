import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  template: `
 <div class="d-flex flex-column"> 

<div class="row p-3">
  <input
    class="form-control"
    [ngClass]="{ 'is-invalid': counterField.invalid || count  < 0 }"
    id="counterField"
    name="counterField"
    type="number"
    [formControl]="counterField"/>
  <p *ngIf="counterField.invalid || count < 0" class="text-danger p-0 m-0">
    <small>Inserisci un valore positivo</small>
  </p>
</div>

<div class="row p-3 d-flex justify-content-between">
  <button
    class="col-5 btn btn-success"
    (click)="counter.increase(+counterField.value)"
    [disabled]="!counterField.valid || counterField.value === 0 ">
    Aggiungi
  </button>
  
  <button
    class="col-5 btn btn-danger"
    (click)="counter.decrease(+counterField.value)"
    [disabled]="!counterField.valid || count <= 0 ||
    count - counterField.value < 0 || counterField.value === 0 ">
    Sottrai
  </button>
</div>

</div>
  `,
  styles: [
  ]
})
export class EditCounterComponent implements OnInit {
  public count!: number;
  counterField = new FormControl('1', Validators.min(0))
  public subs!: Subscription;

  constructor(public counter: CounterService) { }

  ngOnInit(): void {
    this.subs = this.counter.counter$
      .subscribe((data) => (this.count = data));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
