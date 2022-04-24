import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCharacterComponent } from './detail-character.component';

const routes: Routes = [  
  {
  path: 'character-detail',
  redirectTo: '',
  pathMatch: 'full'
},
{
path: '',
children: [
   {
        path: '',
        component: DetailCharacterComponent
    },

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCharacterRoutingModule { }
