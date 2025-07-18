import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl = 'http://localhost:5217/Pokemons/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getPokemonBtId(): Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>(this.apiUrl + 'GetById/1');
  }

  public getAllPokemonEvolucao(): Observable<Pokemon[]>
  {
    return this.httpClient.get<Pokemon[]>(this.apiUrl + 'GetAllPokemonEvolucao');
  }

  public getPokemonByName(nome: string): Observable<Pokemon[]>
  {
    return this.httpClient.get<Pokemon[]>(this.apiUrl + 'GetPokemonByName/' + nome);
  }

  public getPokemonByNameCard(nome: string): Observable<Pokemon>
  {
    return this.httpClient.get<Pokemon>(this.apiUrl + 'GetPokemonByNameCard/' + nome);
  }

  public getPokemonEvolucaoByName(nome: string): Observable<Pokemon[]>
  {
    return this.httpClient.get<Pokemon[]>(this.apiUrl + 'GetPokemonEvolucaoByName/' + nome);
  }
}
