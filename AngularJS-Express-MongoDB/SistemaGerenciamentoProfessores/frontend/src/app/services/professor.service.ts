import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../models/professor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url: string = "http://localhost:3000/professores";

  constructor(private httpClient:HttpClient) { }

  // Registrando o professor
  registrar(professor:Professor):Observable<Professor>{
    return this.httpClient.post<Professor>(`${this.url}/registrar`,professor);

  }
  // Listando todos os professores
  listar():Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(`${this.url}/listar`);

  }

  // Deletando professor(es)
  deletar(id:number){
    return this.httpClient.delete(`${this.url}/deletar/${id}`);
  }

  // Editando professor

  editar(professor:Professor):Observable<Professor>{
    return this.httpClient.put<Professor>(`${this.url}/editar/${professor._id}`,professor);

  }
  // Recuperando professor
  recuperar(id:number):Observable<Professor>{
    return this.httpClient.get<Professor>(`${this.url}/recuperar/${id}`)
  }

  // Recuperar por login
  recuperarPorLogin(login:string):Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(`${this.url}/retrieve/login/${login}`); 
  }
  

}
