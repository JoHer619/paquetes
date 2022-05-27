import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private login: LoginService) {}

  ngOnInit(): void {}

  onLogin(form: Cliente) {
    this.login.loginByEmail(form).subscribe((data) => {
      console.log(data);
    });
  }
}
