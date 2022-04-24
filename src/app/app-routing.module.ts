import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)},

  {
    path: 'character-detail',
    loadChildren: () => import('./components/pages/characters/detail-character/detail-character.module').then(m => m.DetailCharacterModule)},
     {
    path: 'episode-detail',
    loadChildren: () => import('./components/pages/characters/episodes-characters-info/episodes-characters-info.module').then(m => m.EpisodesCharactersInfoModule) }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
