import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankingApi } from '../../services/banking-api';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-convert-crypto',
  imports: [FormsModule, CommonModule],
  templateUrl: './convert-crypto.html',
  styleUrl: './convert-crypto.css',
})
export class ConvertCrypto {

  cryptoAmount: number = 0;
  fromCrypto: string = 'BTC';
  toCrypto: string = 'ETH';

  constructor(
    private bankingApi: BankingApi,
    private flashMessageService: FlashMessageService
  ) {}

  onConvert() {
    if (this.cryptoAmount > 0) {
      this.bankingApi.convertCrypto({ from: this.fromCrypto, to: this.toCrypto, amount: this.cryptoAmount }).subscribe({
        next: () => {
          this.flashMessageService.show(`Converted ${this.cryptoAmount} ${this.fromCrypto} to ${this.toCrypto} successfully!`);
          this.cryptoAmount = 0;
        },
        error: (err) => {
          this.flashMessageService.show('Error converting. Please try again.');
          console.error('Error converting crypto:', err);
        }
      });
    } else {
      this.flashMessageService.show('Please enter a valid amount.');
    }
  }
}
