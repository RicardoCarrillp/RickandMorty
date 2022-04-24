import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCharacterRoutingModule } from './detail-character-routing.module';
import { DetailCharacterComponent } from './detail-character.component';


@NgModule({
  declarations: [DetailCharacterComponent],
  imports: [
    CommonModule,
    DetailCharacterRoutingModule
  ],
  exports: [DetailCharacterComponent]
})
export class DetailCharacterModule { }
