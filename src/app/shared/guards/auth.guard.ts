import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private service: AuthService,
            private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authenticated = this.service.isAuthenticated();
    if (!authenticated) {
      this.router.navigate(['/home']);
    }
    return this.service.isAuthenticated();
  }
}
