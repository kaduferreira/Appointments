import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../shared/layouts/auth-layout/auth-layout.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public criarConta() {
    this.router.navigate(['login']);
  }

}
