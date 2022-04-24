import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCharactersRoutingModule } from './list-characters-routing.module';
import { CharactersComponent } from './characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ListCharactersRoutingModule
  ],
  exports:[
    CharactersComponent

  ]
})
export class ListCharactersModule { }
