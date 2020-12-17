import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../services/categoria.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit(){
    let token = environment.token

    if(token == '') {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Realize o login!')
    }

    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdCategoria(id);
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    });
  }
  btnSim() {
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(() => {
      this.router.navigate(['/categoria'])
      this.alert.showAlertSuccess('Categoria apagado com sucesso!')
    })
  }

  btnNao(){
     this.router.navigate(['/categoria'])
  }
}
