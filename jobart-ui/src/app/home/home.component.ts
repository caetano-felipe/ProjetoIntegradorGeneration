import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './../services/alert.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;

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
