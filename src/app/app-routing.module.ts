import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCharacterComponent } from './components/pages/characters/detail-character/detail-character.component';
import { EpisodesCharactersInfoComponent } from './components/pages/characters/episodes-characters-info/episodes-characters-info.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',component: HomeComponent,
  },

  {
    path: 'character-detail',component: DetailCharacterComponent  },
     {
    path: 'episode-detail',component: EpisodesCharactersInfoComponent  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
