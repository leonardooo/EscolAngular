import { Escola } from './../model/escola';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  ENDERECO = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.ENDERECO + 'listar');
  }

  consultar(id: number): Observable<Escola> {
    return this.http.get<Escola>(this.ENDERECO + 'consultar/' + id);
  }

  incluir(escola: Escola): Observable<any> {
    return this.http.post(this.ENDERECO + 'incluir', escola);
  }

  alterar(escola: Escola): Observable<any> {
    return this.http.put(this.ENDERECO + 'alterar', escola);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(this.ENDERECO + 'excluir/' + id);
  }
 }
