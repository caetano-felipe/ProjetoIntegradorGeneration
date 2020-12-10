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
    private router: Router
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
      alert('Preencha todos os dados corretamente!')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.router.navigate(['/cadastro-servico'])
        alert('Categoria cadastrada com sucesso!')
      })
    }
  }
}
