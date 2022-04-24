import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCharactersRoutingModule } from './list-characters-routing.module';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    ListCharactersRoutingModule
  ],
  exports:[
    CharactersComponent

  ]
})
export class ListCharactersModule { }
