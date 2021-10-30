import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'listar', component: DogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
