import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private router: Router, private pokemonService: PokemonService
    ){}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string) : boolean {
    return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string) : boolean {
    const types = this.pokemon.types;
    if(types.length === 1 && this.hasType(type)){
      return false;
    }
    if(types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  toggleType($event: Event, type: string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;
    const types = this.pokemon.types;
    if(isChecked){
      types.push(type);
    }
    else{
      const typeIndex = types.indexOf(type);
      types.splice(typeIndex);
    }
  }

  onSubmit(){
    console.log("Form submitted.");
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }

}
