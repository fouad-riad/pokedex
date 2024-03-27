import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificheService } from '../../services/notifiche.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
pokemons:Pokemon[]=[]
errorMessage="";

  constructor( private ps: PokemonService, private ns:NotificheService){

  }
  ngOnInit(): void {
   this.ps.search()
   .pipe(
    catchError((err:HttpErrorResponse)=>{
    this.errorMessage="si e verificato un errore nel recuper i pokemons."+err.message
    this.ns.nuovaNotifica(this.errorMessage)
      return of(undefined)
    })
   )
   .subscribe(dati =>{
    if (dati) {
      this.pokemons = dati.data;
      this.ns.nuovaNotifica(`trovati ${this.pokemons.length}pokemons.`)
    } else {
      this.pokemons = [];
    }
})
}
}
