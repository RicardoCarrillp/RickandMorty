import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesCharactersInfoComponent } from './episodes-characters-info.component';

const routes: Routes = [
  {
    path: 'episode-detail',
    redirectTo: '',
    pathMatch: 'full'
},
{
  path: '',
  children: [
     {
          path: '',
          component: EpisodesCharactersInfoComponent
      },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesCharactersInfoRoutingModule { }
