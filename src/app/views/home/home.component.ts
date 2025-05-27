import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { Elemento } from '../../enums/elemento'

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pokemons: Pokemon[]
  elemento: Elemento

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

  currentType(type: number){
    let elemento

    switch(type){
      case 1:
        elemento = "normal"
        break
      case 2:
        elemento = "fogo"
        break
      case 3:
        elemento = "agua"
        break
      case 4:
        elemento = "grama"
        break
    }
    
    console.log(elemento)
    return elemento
  }
}
