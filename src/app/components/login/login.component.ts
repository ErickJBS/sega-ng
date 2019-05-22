import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private snackBar: MatSnackBar, private auth: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (!this.user || !this.password) {
      this.snackBar.open('Inserte usuario y contraseña', 'Aceptar', { duration: 3000 });
      return;
    }
    this.auth.singIn(this.user, this.password);
    this.user = this.password = undefined;
  }

}
