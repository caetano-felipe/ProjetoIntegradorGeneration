import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertService } from '../services/alert.service';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css'],
})
export class PutCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  idCategoria: number
  id: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) {}

  ngOnInit() {
    let token = environment.token

    if(token == '') {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Realize o login!')
    }

    window.scroll(0, 0);
    this.id = this.route.snapshot.params['id'];
    this.findByIdCategoria(this.id);
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

  salvar() {
    this.categoria.id = this.id

    this.categoriaService
      .putCategoria(this.categoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
        this.router.navigate(['/categoria']);
        this.alert.showAlertSuccess('Categoria atualizado com sucesso');
      });
  }
}
