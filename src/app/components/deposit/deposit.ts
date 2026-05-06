import { Component } from '@angular/core';

@Component({
  selector: 'app-deposit',
  imports: [],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css',
})
export class Deposit {

  depositAmount: number = 0;

  onDeposit() {
    console.log(`Depositing amount: ${this.depositAmount}`);
    this.depositAmount = 0;
  }

}
