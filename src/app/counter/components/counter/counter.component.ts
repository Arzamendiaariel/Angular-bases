import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter:{{ counter }}</h3>
    <button (click)="increment()">Increment</button>
    <button (click)="incrementBy(4)">+4</button>
    <button (click)="decrement()" >Decrement</button>
    <button (click)="decrementBy(4)" >-4</button>
    <button (click)="reset()" >reset</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  public increment(): void {
    this.counter++;
  }
  public incrementBy(value:number): void {
    this.counter = this.counter + value;
  }
  public decrement (): void {
    this.counter--;
  }

  public decrementBy(value:number): void {
    this.counter = this.counter - value;
  }

  public reset(): void {
    this.counter = 10
  }
}
