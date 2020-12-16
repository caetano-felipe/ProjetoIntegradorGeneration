import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../services/auth.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router, 
    private alert: AlertService

  ) { }
  ngOnInit(): void {
  }

  entrar() {
    if(!!this.userLogin.senha && !!this.userLogin.usuario){
      this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
        this.userLogin = resp
        environment.token = this.userLogin.token
        this.router.navigate(['/servico'])
        this.alert.showAlertSuccess('Logado com sucesso!')    
      })
    }
    else{
      this.alert.showAlertDanger("Preencher todos os campos!")
    }
    
  }

  cadastrar() {
    this.router.navigate(['/cadastrar'])
  }
}
