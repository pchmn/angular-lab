import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeTabComponent } from './tabs/home-tab/home-tab.component';

@NgModule({
  declarations: [HomeTabComponent],
  exports: [HomeTabComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
