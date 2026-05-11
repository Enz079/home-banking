import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-balance',
  imports: [CurrencyPipe],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance {

  balance: number = 1000;

  onViewBalance() {
    console.log('Current balance:', this.balance);
  }
}
