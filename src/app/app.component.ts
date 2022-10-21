import { Component, OnInit, OnChanges } from '@angular/core';
import { POKEMONS } from './moke-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title: string = "Liste de pokémons";
  pokemonList : Pokemon[] = POKEMONS;
  selectedPokemon : Pokemon|undefined;

  selectPokemon(index : string){
    const pokemonID: number = +index;
    const findedPokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === pokemonID)
    this.selectedPokemon = findedPokemon;
  }
}
