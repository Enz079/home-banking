import { CurrencyPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BankingApi, BalanceData } from '../../services/banking-api';

@Component({
  selector: 'app-balance',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance implements OnInit {

  balance: number | null = null;
  currency: string = 'USD';

  constructor(private bankingApi: BankingApi) {}

  ngOnInit() {
    this.loadBalance();
  }

  loadBalance() {
    this.bankingApi.getBalance().subscribe((data: BalanceData) => {
      this.balance = data.balance;
      this.currency = data.currency || 'EUR';
    });
  }

  onViewBalance() {
    console.log('Current balance:', this.balance);
  }
}
