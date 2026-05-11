import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  imports: [CommonModule],
  templateUrl: './transactions-list.html',
  styleUrl: './transactions-list.css',
})
export class TransactionsList {

  transactions = [
    { date: '11-05-2026', type: 'Deposit', amount: 100, currency: 'USD' },
    { date: '12-05-2026', type: 'Withdrawal', amount: 50, currency: 'USD' },
    { date: '13-05-2026', type: 'Deposit', amount: 200, currency: 'USD' },
  ];

  onViewTransactions() {
    console.log('Viewing transactions:', this.transactions);
  }
}
