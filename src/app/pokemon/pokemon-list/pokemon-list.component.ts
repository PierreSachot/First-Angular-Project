import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit{

  @Input()
  list : Pokemon[];
  selectedPokemon : Pokemon|undefined;

  constructor(
    private router: Router,
    private pokemonService : PokemonService
    ){}

  ngOnInit(): void {
    this.list = this.pokemonService.getPokemonList();
  }
}
