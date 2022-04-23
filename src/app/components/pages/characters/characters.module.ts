import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCharacterComponent } from './detail-character/detail-character.component';
import { EpisodesCharactersInfoComponent } from './episodes-characters-info/episodes-characters-info.component';
import { CharactersComponent } from './listCharacters/characters.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
    DetailCharacterComponent,
    EpisodesCharactersInfoComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    DetailCharacterComponent,
    EpisodesCharactersInfoComponent,
    CharactersComponent
  ] 
})
export class CharactersModule { }
