import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.router.navigate(['/login'])
  }

}
