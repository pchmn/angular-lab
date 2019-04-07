import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@ui/ui.module';
import { ExampleTabComponent } from './tabs/example-tab/example-tab.component';
import { HomeTabComponent } from './tabs/home-tab/home-tab.component';

@NgModule({
  declarations: [HomeTabComponent, ExampleTabComponent],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ],
  entryComponents: [HomeTabComponent, ExampleTabComponent]
})
export class ComponentsModule { }
