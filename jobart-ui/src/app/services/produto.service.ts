import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:9000/produto', this.token)
  }

  postProduto(produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>('http://localhost:9000/produto', produto, this.token)
  }
}
