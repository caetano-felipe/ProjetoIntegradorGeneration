import { AlertService } from './../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private alert : AlertService
  ) { }

  ngOnInit() {
    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      console.log(resp)
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  cadastrar() {
    if (this.categoria.nome == null || this.categoria.descricao == null || this.categoria == null) {
      this.alert.showAlertDanger('Preencha todos os dados corretamente!')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.router.navigate(['/cadastro-servico'])
        this.alert.showAlertSuccess('Categoria cadastrada com sucesso!')
      })
    }
  }

  delete(id:number){
    this.router.navigate(['/delete-categoria/'+id]);
  }

  editar(id:number){
    this.router.navigate(['/editar-categoria//'+id]);
  }
}
