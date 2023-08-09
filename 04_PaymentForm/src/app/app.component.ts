import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  miles: number = 0;

  onMilesChange(target : EventTarget): void {
    const value = (<HTMLInputElement> target).value;
    this.miles = parseInt(value);
  }

  onNameChange(target : EventTarget): void {
    const value = (<HTMLInputElement> target).value;
    this.name = value;
  }
  onDateChange(target : EventTarget): void {
    const value = (<HTMLInputElement> target).value;
    this.date = value;
  }
  onAmountChange(target : EventTarget): void {
    const value = (<HTMLInputElement> target).value;
    this.amount = parseFloat(value);
  }
}
