import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  // path -> link/url
  // component -> component that will be created (also the view)
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // Router module configures this module with the routes previuosly defined
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }