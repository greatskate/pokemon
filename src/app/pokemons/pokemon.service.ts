import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Pokemon } from './pokemon.model';
import { PagedData } from './paged-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url : string = 'http://51.75.122.159:3000'
  constructor(private http : HttpClient) { }
  getPokemons(offset:number): Observable<PagedData<Pokemon>> {
    const params= new HttpParams()
        .set('offset',`${offset}`)
        .set('limit','20')
    return this.http.get<PagedData<Pokemon>>(this.url+"/pokemons",{params});
  }
  getPokemon(id : String): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url+"/pokemons/"+id);
  }
}
