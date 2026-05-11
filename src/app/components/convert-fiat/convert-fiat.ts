import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-fiat',
  imports: [FormsModule],
  templateUrl: './convert-fiat.html',
  styleUrl: './convert-fiat.css',
})
export class ConvertFiat {

  fiatAmount: number = 0;

  onConvert() {
    console.log(`Converting fiat amount: ${this.fiatAmount}`);
    this.fiatAmount = 0;
  }
}
