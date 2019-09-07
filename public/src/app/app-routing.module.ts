import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"read", component: ReadComponent},
  {path:"create", component: CreateComponent},
  {path:"update", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
