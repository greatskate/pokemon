import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon : Pokemon;

  constructor(private route:ActivatedRoute,private pokemonService : PokemonService) { }

  ngOnInit() {
      this.pokemonService.getPokemon(this.route.snapshot.paramMap.get('id')).subscribe((pd : Pokemon) => {
        this.pokemon = pd
      });
  }
  ngOnChanges(){
      this.pokemonService.getPokemon(this.route.snapshot.paramMap.get('id')).subscribe((pd : Pokemon) => {
        this.pokemon = pd
      });
  }

}
