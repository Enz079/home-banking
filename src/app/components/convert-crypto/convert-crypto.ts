import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-crypto',
  imports: [FormsModule],
  templateUrl: './convert-crypto.html',
  styleUrl: './convert-crypto.css',
})
export class ConvertCrypto {

  cryptoAmount: number = 0;

  onConvert() {
    console.log(`Converting crypto amount: ${this.cryptoAmount}`);
    this.cryptoAmount = 0;
  }
}
