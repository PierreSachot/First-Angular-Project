import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../moke-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html'
})
export class PokemonDetailsComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.activatedRouter.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    }
  }

  goBack(){
    this.router.navigate(['/pokemons/']);
  }
}
