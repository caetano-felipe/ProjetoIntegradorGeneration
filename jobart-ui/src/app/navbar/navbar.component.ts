import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  }

  home() {
    if(environment.token == ''){
      this.router.navigate(['/home'])  
    }else {
      this.sair()
    } 
  }

  sair() {
    this.router.navigate(['/home'])
    this.alert.showAlertDanger('Deslogado!')
    environment.token = ''
  }

  scroll(){
    let alvo = document.getElementById("#exemplos")
    window.scroll(0, 10)
  }
}
