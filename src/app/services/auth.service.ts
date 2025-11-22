import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
      throw new Error("Method not implemented.");
  }

  constructor() { }

  // login(credentials: any): Observable<any> {}
  // signup(userData: any): Observable<any> {}
  // resetPassword(email: string): Observable<any> {}
  // googleAuth(): Observable<any> {}
  // facebookAuth(): Observable<any> {}
}
