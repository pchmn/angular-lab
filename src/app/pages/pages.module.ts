import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  exports: [
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    PrismModule
  ]
})
export class PagesModule { }
