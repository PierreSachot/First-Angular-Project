import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

const pokemonRoutes: Routes = [
  { path:'pokemons', component: PokemonListComponent },
  { path:'pokemons/:id', component: PokemonDetailsComponent},
  { path:'pokemons/:id/edit', component: PokemonEditComponent}
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
    PokemonFormComponent,
    PokemonEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
