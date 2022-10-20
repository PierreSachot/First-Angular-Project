import { Component, OnInit, OnChanges } from '@angular/core';
import { POKEMONS } from './moke-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = "Liste de pokémons";
  pokemonList : Pokemon[] = POKEMONS;
  selectedPokemon : Pokemon;

  ngOnInit() {
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon : Pokemon){
    this.selectedPokemon = pokemon;
  }

}
