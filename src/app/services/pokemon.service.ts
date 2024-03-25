import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCardsResponse } from '../models/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  private httpOptions={
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_SERVER_API_KEY
    })
  }
  search(pageSize:Number = 20): Observable<SearchCardsResponse>{
    return this.http.get<SearchCardsResponse>(`${environment.POKEMON_SERVER_BASE_URL}/cards?pageSize=${pageSize}`,this.httpOptions)
  }
  getById(id:string){
    
  }
}
