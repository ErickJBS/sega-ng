import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (!this.user || !this.password) {
      this.snackBar.open('Inserte usuario y contraseña', 'Aceptar', { duration: 3000 });
      return;
    }
    this.auth.signIn(this.user, this.password).subscribe(data => {
      if (data && data.token) {
        this.router.navigate(['/']);
      } else {
        this.snackBar.open('Usuario o contraseña incorrectas', 'Aceptar', { duration: 3000 });
      }
    });
    this.user = this.password = undefined;
  }

}
