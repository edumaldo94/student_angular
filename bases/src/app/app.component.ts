import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'bases';
  public counter: number = 10;

  public increment( value : number): void {
    this.counter += value ;
  }
  public decrement(): void {
    this.counter -= 1;
  }
  public reset():void {
    this.counter = 10;
  }
}
