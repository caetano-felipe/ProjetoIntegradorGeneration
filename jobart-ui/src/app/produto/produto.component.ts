import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../services/categoria.service';
import { ProdutoService } from '../services/produto.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  nome: string
  produto: Produto = new Produto();
  listaProdutos: Produto[];

  nomeCategoria: string;
  listaCategorias: Categoria[];

  

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertService,
    private router: Router
    
  ) { }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp;
      console.log(resp)
    } )
  }

  findByNomeProduto(){
    if(this.nome === ''){
      this.findAllProdutos()
    } else {
      this.produtoService.getByNomeProduto(this.nome).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

  findByNomeCategoria() {
    if (this.nomeCategoria === ''){
      this.findAllCategoria()
    } else {
      this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp
      })
    }
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.findAllProdutos();
    this.findAllCategoria();
  }

  comprar(){
    this.alert.showAlertSuccess("Serviço contratado com sucesso!");
  }
  
}
