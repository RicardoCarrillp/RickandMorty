import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () =>import('./components/pages/home/home.module').then((m) =>m.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () =>import('./components/pages/characters/listCharacters/list-characters.module').then((m) =>m.ListCharactersModule),
  },
  {
    path: 'characterList',
    loadChildren: () =>import('./components/pages/characters/detail-character/detail-character.module').then((m) =>m.DetailCharacterModule),
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
