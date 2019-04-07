import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy loading of modules (https://angular.io/guide/lazy-loading-ngmodules)
const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'form-examples',
    loadChildren: './pages/form-examples/form-examples.module#FormExamplesModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
