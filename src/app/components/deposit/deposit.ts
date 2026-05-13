import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankingApi } from '../../services/banking-api';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-deposit',
  imports: [FormsModule, CommonModule],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css',
})
export class Deposit {

  depositAmount: number = 0;
  currency: string = 'USD';

  constructor(
    private bankingApi: BankingApi,
    private flashMessageService: FlashMessageService
  ) {}

  onDeposit() {
    if (this.depositAmount > 0) {
      this.bankingApi.deposit({ amount: this.depositAmount }).subscribe({
        next: () => {
          const message = `Deposited ${this.depositAmount} ${this.currency} successfully!`;
          this.flashMessageService.show(message);
          this.depositAmount = 0;
        },
        error: (err) => {
          this.flashMessageService.show('Error depositing. Please try again.');
          console.error('Error depositing:', err);
        }
      });
    } else {
      this.flashMessageService.show('Please enter a valid amount.');
    }
  }
}
