import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsWithoutRoutingComponent } from './tabs-without-routing/tabs-without-routing.component';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent
  },
  {
    path: 'without-routing',
    component: TabsWithoutRoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
