import { SelectsModule } from './selects/selects.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from './inputs/inputs.module';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [AutoFocusDirective],
  imports: [
    CommonModule,
    InputsModule,
    SelectsModule
  ],
  exports: [InputsModule, SelectsModule]
})
export class UiModule { }
