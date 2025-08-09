import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: '<h1>Hola counter</h1>'
})
export class CounterComponent {

  public counter: number = 10;

  public increment(value: number): void {
    this.counter += value;
  }
}

