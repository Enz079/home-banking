import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankingApi } from '../../services/banking-api';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-convert-fiat',
  imports: [FormsModule, CommonModule],
  templateUrl: './convert-fiat.html',
  styleUrl: './convert-fiat.css',
})
export class ConvertFiat {

  fiatAmount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';

  constructor(
    private bankingApi: BankingApi,
    private flashMessageService: FlashMessageService
  ) {}

  onConvert() {
    if (this.fiatAmount > 0) {
      this.bankingApi.convertFiat({ from: this.fromCurrency, to: this.toCurrency, amount: this.fiatAmount }).subscribe({
        next: () => {
          this.flashMessageService.show(`Converted ${this.fiatAmount} ${this.fromCurrency} to ${this.toCurrency} successfully!`);
          this.fiatAmount = 0;
        },
        error: (err) => {
          this.flashMessageService.show('Error converting. Please try again.');
          console.error('Error converting fiat:', err);
        }
      });
    } else {
      this.flashMessageService.show('Please enter a valid amount.');
    }
  }
}
