import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
