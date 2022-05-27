import { Injectable } from '@angular/core';

// Models
import { Cliente } from '../models/cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string =
    'https://desarrollo-ingsoftware.herokuapp.com/salamaExpress.com/';

  constructor(private http: HttpClient) {}

  loginByEmail(form: Cliente) {
    let direccion = this.url + 'cliente';
    return this.http.post(direccion, form);
  }
}
