import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const token = this.auth.getToken();
    if (!token || new Date(token.expirationTime) < new Date()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
