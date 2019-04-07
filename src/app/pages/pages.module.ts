import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  exports: [
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
