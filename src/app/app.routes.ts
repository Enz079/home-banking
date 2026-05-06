import { Routes } from '@angular/router';
import { Deposit } from './components/deposit/deposit';
import { Withdrawal } from './components/withdrawal/withdrawal';
import { TransactionsList } from './components/transactions-list/transactions-list';
import { TransactionDetail } from './components/transaction-detail/transaction-detail';
import { Balance } from './components/balance/balance';
import { ConvertFiat } from './components/convert-fiat/convert-fiat';
import { ConvertCrypto } from './components/convert-crypto/convert-crypto';

export const routes: Routes = [
  { path: 'deposit', component: Deposit },
  { path: 'withdrawal', component: Withdrawal },
  { path: 'transactions', component: TransactionsList },
  { path: 'transaction/:id', component: TransactionDetail },
  { path: 'balance', component: Balance },
  { path: 'convert-fiat', component: ConvertFiat },
  { path: 'convert-crypto', component: ConvertCrypto },
  { path: '', redirectTo: '/balance', pathMatch: 'full' }
];
