import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {

  private counterSub!: BehaviorSubject<number>;

  public counter$!: Observable<number>;

  constructor() {
    this.counterSub = new BehaviorSubject<number>(0);
    this.counter$ = this.counterSub.asObservable();
  }

  public getCount() {
    return this.counter$;
  }

  public increase(num: number = 1): void {
    this.counterSub.next(this.counterSub.value + num);

  }

  public decrease(num: number = 1): void {
    this.counterSub.next(this.counterSub.value - num);
  }
}
