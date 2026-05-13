import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankingApi } from '../../services/banking-api';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-withdrawal',
  imports: [FormsModule, CommonModule],
  templateUrl: './withdrawal.html',
  styleUrl: './withdrawal.css',
})
export class Withdrawal {

  withdrawalAmount: number = 0;
  currency: string = 'USD';

  constructor(
    private bankingApi: BankingApi,
    private flashMessageService: FlashMessageService
  ) {}

  onWithdraw() {
    if (this.withdrawalAmount > 0) {
      this.bankingApi.withdraw({ amount: this.withdrawalAmount }).subscribe({
        next: () => {
          const message = `Withdrew ${this.withdrawalAmount} ${this.currency} successfully!`;
          this.flashMessageService.show(message);
          this.withdrawalAmount = 0;
        },
        error: (err) => {
          this.flashMessageService.show('Error withdrawing. Please try again.');
          console.error('Error withdrawing:', err);
        }
      });
    } else {
      this.flashMessageService.show('Please enter a valid amount.');
    }
  }
}
