import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BalanceData {
  amount: number;
  currency: string;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
  description: string;
  currency?: string;
}

export interface DepositRequest {
  amount: number;
}

export interface WithdrawalRequest {
  amount: number;
}

export interface ConversionRequest {
  from: string;
  to: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BankingApi {
  private baseUrl = '/accounts';

  constructor(private http: HttpClient) {}

  getBalance(): Observable<BalanceData> {
    return this.http.get<BalanceData>(`${this.baseUrl}/balance`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions`);
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/transactions/${id}`);
  }

  deposit(request: DepositRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/deposit`, request);
  }

  withdraw(request: WithdrawalRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/withdraw`, request);
  }

  convertFiat(request: ConversionRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/convert-fiat`, request);
  }

  convertCrypto(request: ConversionRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/convert-crypto`, request);
  }
}
