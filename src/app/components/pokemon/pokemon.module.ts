import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeballComponent } from './pokeball/pokeball.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PokeballComponent
  ],
  exports: [
    PokeballComponent
  ]
})
export class PokemonModule { }
