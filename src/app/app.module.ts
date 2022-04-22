import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeModule } from './components/pages/home/home.module';
import { CharactersModule } from './components/pages/characters/characters.module';
import { ListCharactersModule } from './components/pages/characters/listCharacters/list-characters.module';
import { DetailCharacterModule } from './components/pages/characters/detail-character/detail-character.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CharactersModule,
    ListCharactersModule,
    DetailCharacterModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
