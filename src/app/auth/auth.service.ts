import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable()
export class AuthService{

  private usuarioAutenticado : boolean = false;

  constructor(private router: Router){ }

  fazerLogin(usuario: Usuario){
    debugger;
    if (usuario.nome === 'kadu' && usuario.senha === '123'){
      this.usuarioAutenticado = true;
      this.router.navigate(['appointments']);
    } else {
      this.usuarioAutenticado = false;
    }
  }

}
