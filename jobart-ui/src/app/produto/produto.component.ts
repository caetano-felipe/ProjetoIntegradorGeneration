import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../services/categoria.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public service = [1, 2, 3, 4, 5, 6, 7, 8];

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  ngOnInit(): void {
    /*
    window.scroll(0, 0)
    this.findAllProdutos()
    */
  }
}
