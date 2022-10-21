import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const pokemonRoutes: Routes = [
  { path:'pokemons', component: PokemonListComponent },
  { path:'pokemons/:id', component: PokemonDetailsComponent}
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
