import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;

  constructor() { }

  public increase(num:number = 1):number{
    return this.counter += num;
  }

  public decrease(num:number = 1):number{
    const val:number = this.counter -= num;
    return val < 1 ? this.counter : this.counter = val;
  }

  public getCount():number{
    return this.counter;
  }

}
