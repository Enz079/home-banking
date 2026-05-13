import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlashMessageService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  readonly message$: Observable<string | null> = this.messageSubject.asObservable();

  show(message: string) {
    this.messageSubject.next(message);
  }

  clear() {
    this.messageSubject.next(null);
  }
}
