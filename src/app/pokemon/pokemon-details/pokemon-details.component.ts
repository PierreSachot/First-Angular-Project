import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../moke-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html'
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.activatedRouter.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goBack(){
    this.router.navigate(['/pokemons/']);
  }

  goEdit(){
    this.router.navigate([`/pokemons/${this.activatedRouter.snapshot.paramMap.get('id')}/edit`])
  }
}
