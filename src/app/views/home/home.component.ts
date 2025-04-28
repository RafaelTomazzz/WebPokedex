import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pokemons: Pokemon[]

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void{
    this.getAllPokemonEvolucao()
  }

  getAllPokemonEvolucao(){
    this.pokemonService.getAllPokemonEvolucao().subscribe(res => {
      this.pokemons = res

      console.log(this.pokemons)
    })
  }
}
