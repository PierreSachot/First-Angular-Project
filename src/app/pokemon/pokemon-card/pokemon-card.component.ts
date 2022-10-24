import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input()
  pokemon!: Pokemon;

  constructor(private router: Router){ }

  goToPokemon(pokemon: Pokemon){
      this.router.navigate(['/pokemons',pokemon.id]);
  }
}
