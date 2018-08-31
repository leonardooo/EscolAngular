import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import sha256 from 'crypto-js/sha256';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, senha: string): boolean {
    const authenticated = usuario === 'admin'
      && senha === '705c2817f0c5993464ae3d7e4ae11dd1327aae5e8b25dfbfa4c622282cf36b50';

    if (authenticated) {
      sessionStorage.setItem(USER_KEY, JSON.stringify(usuario));
    }

    return authenticated;
  }

  logoff() {
    sessionStorage.removeItem(USER_KEY);
  }

  getAuthenticatedUser(): string | null {
    const user = sessionStorage.getItem(USER_KEY);
    return (!user) ? null : JSON.parse(user);
  }

  isAuthenticated() {
    return this.getAuthenticatedUser() !== null;
  }
}
