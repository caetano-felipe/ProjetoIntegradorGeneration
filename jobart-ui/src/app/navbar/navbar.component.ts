import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router, 
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/home'])
    localStorage.clear()
  }
}
