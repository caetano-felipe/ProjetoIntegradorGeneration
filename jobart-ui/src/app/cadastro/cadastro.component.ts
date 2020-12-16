import { AlertService } from './../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  user: User = new User();
  senha: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit() {
    window.scroll(0, 0)
  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      if(!!this.user.nome && !!this.user.usuario && !!this.user.senha){
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp;
        this.router.navigate(['/login']);
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!');
      });
    }
    else{
      this.alert.showAlertDanger("Preencher todos os campos");
    }
    }
    else {
      this.alert.showAlertDanger('Senha inválida!');
    }
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
  }
}
