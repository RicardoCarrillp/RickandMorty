import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DetailCharacterComponent } from './detail-character/detail-character.component';
import { EpisodesCharactersInfoComponent } from './episodes-characters-info/episodes-characters-info.component';


@NgModule({
  declarations: [
    DetailCharacterComponent,
    EpisodesCharactersInfoComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
