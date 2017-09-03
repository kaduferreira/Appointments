import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable()
export class AuthService{

  private usuarioAutenticado : boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router){ }

  fazerLogin(usuario: Usuario){
    debugger;
    if (usuario.nome === 'kadu' && usuario.senha === '123'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['appointments']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

}
