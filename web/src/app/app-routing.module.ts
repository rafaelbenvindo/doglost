import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogResolver } from './dog.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'listar', 
    component: DogListComponent,
    resolve: {
      dogs: DogResolver
    }},
  {path: 'cadastrar', component: DogFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
