import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../services/produto.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ){ }

  ngOnInit(){
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }
   findByIdProduto(id: number) {
     this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
       this.produto = resp
     })
   }

  btnSim() {
    this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
      this.router.navigate(['/servico'])
      this.alert.showAlertSuccess('Serviço apagado com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/servico'])
  }
}
