import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from "@angular/material/list"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatCardModule} from "@angular/material/card"
import {MatChipsModule} from "@angular/material/chips"
import {HttpClientModule} from "@angular/common/http";
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonAttackComponent } from './components/pokemon-attack/pokemon-attack.component';
import { NotificheComponent } from './components/notifiche/notifiche.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PokemonCatturatiComponent } from './components/pokemon-catturati/pokemon-catturati.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonAttackComponent,
    NotificheComponent,
    RegisterComponent,
    LoginComponent,
    PokemonCatturatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatInputModule
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
