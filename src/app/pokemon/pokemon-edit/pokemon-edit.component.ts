import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokmeon',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute : ActivatedRoute,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

}
