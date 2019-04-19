import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { PagedData } from '../paged-data.model';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons : Pokemon[];
  offset : number= 0;
  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons(this.offset).subscribe((pd : PagedData<Pokemon>) => {
      this.pokemons = pd.data
    });
  }
  onScroll() {
    console.log("scroll");
    this.offset+=20;
    this.pokemonService.getPokemons(this.offset).subscribe((pd : PagedData<Pokemon>) => {
      this.pokemons = this.pokemons.concat(pd.data);
    });
  }
}
