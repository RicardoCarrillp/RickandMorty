import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DetailCharacterModule } from './components/pages/characters/detail-character/detail-character.module';
import { HomeModule } from './components/pages/home/home.module';
import { ListCharactersModule } from './components/pages/characters/listCharacters/list-characters.module';
import { EpisodesCharactersInfoModule } from './components/pages/characters/episodes-characters-info/episodes-characters-info.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ListCharactersModule,
    EpisodesCharactersInfoModule,
    RouterModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
