import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonModule } from '../../../components/pokemon/pokemon.module';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PokemonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  portfolioList: any[] = [];

  ngOnInit(): void {
    this.portfolioList = [
      {
        name: "Angular - Charmander",
        pokemonImg: "./assets/images/pokemon/charmander.png",
        frameworkImg: "./assets/images/framework/angular-original.svg",
        classCss: "charmander",
        url: "charmander.marcelocb.dev"

      },
      {
        name: "Next - Squirtle",
        pokemonImg: "./assets/images/pokemon/squirtle.png",
        frameworkImg: "./assets/images/framework/react-original.svg",
        classCss: "squirtle",
        url: "squirtle.marcelocb.dev"

      },
      {
        name: "Vue - Bulbasaur",
        pokemonImg: "./assets/images/pokemon/bulbasaur.png",
        frameworkImg: "./assets/images/framework/vuejs-original.svg",
        classCss: "bulbasaur",
        url: "bulbasaur.marcelocb.dev"
      },
    ]
  }


}
