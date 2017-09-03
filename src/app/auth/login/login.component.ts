import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/layouts/auth-layout/auth-layout.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public autenticate() {
    debugger;
    this.authService.fazerLogin(this.usuario);
  }
}
