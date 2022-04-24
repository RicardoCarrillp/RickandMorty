import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesCharactersInfoRoutingModule } from './episodes-characters-info-routing.module';
import { EpisodesCharactersInfoComponent } from './episodes-characters-info.component';


@NgModule({
  declarations: [EpisodesCharactersInfoComponent],
  imports: [
    CommonModule,
    EpisodesCharactersInfoRoutingModule
  ],
  exports:[
    EpisodesCharactersInfoComponent

  ]
})
export class EpisodesCharactersInfoModule { }
