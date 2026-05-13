import { Component, OnInit } from '@angular/core';import { CommonModule } from '@angular/common';import { ActivatedRoute } from '@angular/router';
import { BankingApi, Transaction } from '../../services/banking-api';

@Component({
  selector: 'app-transaction-detail',
  imports: [CommonModule],
  templateUrl: './transaction-detail.html',
  styleUrl: './transaction-detail.css',
})
export class TransactionDetail implements OnInit {

  transaction: Transaction | null = null;

  constructor(private route: ActivatedRoute, private bankingApi: BankingApi) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bankingApi.getTransaction(id).subscribe((data: Transaction) => {
        this.transaction = data;
      });
    }
  }
}
