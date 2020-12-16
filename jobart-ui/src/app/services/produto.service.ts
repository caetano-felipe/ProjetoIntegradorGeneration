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
    return this.http.get<Produto[]>('https://jobart.herokuapp.com/produto', this.token)
  }

  getByIdProduto(id: number) : Observable<Produto> {
    return this.http.get<Produto>(`https://jobart.herokuapp.com/produto/${id}`, this.token)
  }

  postProduto(produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>('https://jobart.herokuapp.com/produto', produto, this.token)
  }

  putProduto(produto: Produto) : Observable<Produto> {
    return this.http.put<Produto>('https://jobart.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://jobart.herokuapp.com/produto/${id}`, this.token)
  }

  getByNomeProduto(nome: string) : Observable<Produto[]> {
    return this.http.get<Produto[]>(`https://jobart.herokuapp.com/produto/nome/${nome}`, this.token)
  }

  getByTipoProduto(tipo: string) : Observable<Produto[]> {
    return this.http.get<Produto[]>(`https://jobart.herokuapp.com/produto/tipo/${tipo}`, this.token)
  }
}
