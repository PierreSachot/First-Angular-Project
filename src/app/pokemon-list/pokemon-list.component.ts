import { Component, Input } from '@angular/core';
import { POKEMONS } from '../moke-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent {

  @Input()
  list : Pokemon[] = POKEMONS;
  selectedPokemon : Pokemon|undefined;

  selectPokemon(index : string){
    const pokemonID: number = +index;
    const findedPokemon: Pokemon|undefined = this.list.find(pokemon => pokemon.id === pokemonID)
    this.selectedPokemon = findedPokemon;
  }

}
