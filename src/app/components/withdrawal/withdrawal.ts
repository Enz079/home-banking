import { Component } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  imports: [],
  templateUrl: './withdrawal.html',
  styleUrl: './withdrawal.css',
})
export class Withdrawal {

  withdrawalAmount: number = 0;

  onWithdraw() {
    console.log(`Withdrawing amount: ${this.withdrawalAmount}`);
    this.withdrawalAmount = 0;
  }
}
