import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (!this.user || !this.password) {
      this.snackBar.open('Inserte usuario y contraseña', 'Aceptar', { duration: 3000 });
    }

    //TODO login service
    console.log(this.user, this.password);
  }

}
