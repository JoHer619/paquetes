import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      telefono: [''],
      correo: [''],
      password: [''],
    });
  }

  singUp() {
    this.http
      .post<any>(
        'https://desarrollo-ingsoftware.herokuapp.com/salamaExpress.com/cliente',
        this.signupForm.value
      )
      .subscribe(
        (res) => {
          console.log('Singup successfull');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          console.log('Something went wrong');
        }
      );
  }

  // -> Form
  /*   register = {
    name: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    password: '',
  }; */

  // Registrar al usuario
  /*   onRegister() {
    console.log(this.register);
  } */
}
