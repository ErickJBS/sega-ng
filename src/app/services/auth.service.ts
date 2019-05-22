import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject: BehaviorSubject<User>;
  user: Observable<User>;
  token: string;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.user = this.currentUserSubject.asObservable();
  }

  async singIn(user: string, password: string) {
    const url = `${environment.server}/login`;
    this.http.post<any>(url, { user, password })
      .subscribe(
        data => {
          if (data && data.token) {
            this.setToken(data.token);
            this.router.navigate(['/']);
          } else {
            console.log('Usuario o contraseña incorrectos');
          }
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  async signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return this.router.navigate(['/']);
  }

  getUser() {
    return this.user.pipe(first()).toPromise();
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    else {
      if (localStorage.getItem('currentUser')) {
        return JSON.parse(localStorage.getItem("token"));
      }
      return null;
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('currentUser', JSON.stringify(token));
  }
}
