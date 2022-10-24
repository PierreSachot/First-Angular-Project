import { Injectable } from '@angular/core';
import { POKEMONS } from './moke-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id === id);
  }

  getPokemonTypeList() : string[]{
    let results = [
      'Plante',
      'Feu',
      'Eau',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'];
    return results;
  }
}
