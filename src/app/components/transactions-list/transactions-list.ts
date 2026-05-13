import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BankingApi, Transaction } from '../../services/banking-api';

@Component({
  selector: 'app-transactions-list',
  imports: [CommonModule],
  templateUrl: './transactions-list.html',
  styleUrl: './transactions-list.css',
})
export class TransactionsList implements OnInit {

  transactions: Transaction[] = [];
  loading = true;

  constructor(private bankingApi: BankingApi) {}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.bankingApi.getTransactions().subscribe({
      next: (data: Transaction[]) => {
        this.transactions = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading transactions:', err);
        this.loading = false;
      }
    });
  }

  onViewTransactions() {
    console.log('Viewing transactions:', this.transactions);
  }
}
