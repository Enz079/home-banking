import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BalanceData {
  balance: number;
  currency: string;
  account_id?: number;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date?: string;
  created_at?: string;
  description: string;
  currency?: string;
}

export interface DepositRequest {
  amount: number;
  description?: string;
}

export interface WithdrawalRequest {
  amount: number;
  description?: string;
}

export interface ConversionRequest {
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class BankingApi {
  private baseUrl = '/api/accounts';
  private accountId = 1;

  constructor(private http: HttpClient) {}

  private accountUrl(): string {
    return `${this.baseUrl}/${this.accountId}`;
  }

  getBalance(): Observable<BalanceData> {
    return this.http.get<BalanceData>(`${this.accountUrl()}/balance`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.accountUrl()}/transactions`);
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.accountUrl()}/transactions/${id}`);
  }

  deposit(request: DepositRequest): Observable<any> {
    return this.http.post(`${this.accountUrl()}/deposits`, request);
  }

  withdraw(request: WithdrawalRequest): Observable<any> {
    return this.http.post(`${this.accountUrl()}/withdrawals`, request);
  }

  convertFiat(request: ConversionRequest): Observable<any> {
    return this.http.get<any>(`${this.accountUrl()}/balance/convert/fiat`, {
      params: { to: request.to }
    });
  }

  convertCrypto(request: ConversionRequest): Observable<any> {
    return this.http.get<any>(`${this.accountUrl()}/balance/convert/crypto`, {
      params: { to: request.to }
    });
  }
}
