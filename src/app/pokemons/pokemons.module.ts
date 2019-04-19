import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatListModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PokemonDetailComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule
  ]
})
export class PokemonsModule { }
