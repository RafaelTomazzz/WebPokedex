import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { Elemento } from '../../enums/elemento'
import { NgForm } from '@angular/forms';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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

  getPokemonByName(){
    const input = document.getElementById("SearchBar")
    let nome = input?.innerHTML

    if (nome == null){
      nome = ""
    }

    this.pokemonService.getPokemonByName(nome).subscribe(res => {
      this.pokemons = res

      console.log(this.pokemons)
    })
  }

  getPokemonForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    evolucao: new FormControl(false, Validators.required)
  })

  OnSubmit(){
    const nome = this.getPokemonForm.value.nome
    const evolucao = this.getPokemonForm.value.evolucao

    if(nome){
      
      if(evolucao == false){
        this.pokemonService.getPokemonByName(nome).subscribe(res => {
          this.pokemons = res
        })
      } else{
        this.pokemonService.getPokemonEvolucaoByName(nome).subscribe(res => {
          this.pokemons = res
        })
      }
      
    }

    console.log(nome)
  }
}
