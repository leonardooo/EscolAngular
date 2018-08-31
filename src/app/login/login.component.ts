import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as crypto from 'crypto-js';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    const senhaSha256 = sha256(senha).toString();
    console.log(senhaSha256);
    this.service.login(usuario, senhaSha256);
    this.router.navigate(['/listar']);
  }

}
