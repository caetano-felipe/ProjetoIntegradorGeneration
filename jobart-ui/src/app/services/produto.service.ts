import { environment } from './../../environments/environment.prod';
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
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:9000/produto', this.token)
  }

  getByIdProduto(id: number) : Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:9000/produto/${id}`, this.token)
  }

  postProduto(produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>('http://localhost:9000/produto', produto, this.token)
  }

  putProduto(produto: Produto) : Observable<Produto> {
    return this.http.put<Produto>('http://localhost:9000/produto', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:9000/produto/${id}`, this.token)
  }

  getByNomeProduto(nome: string) : Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:9000/categoria/nome/${nome}`, this.token)
  }
}
