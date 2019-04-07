import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'dynamic-tabs',
    loadChildren: './pages/tabs/tabs.module#TabsModule'
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
