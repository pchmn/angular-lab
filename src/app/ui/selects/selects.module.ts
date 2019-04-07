import { AutoFocusDirective } from './../directives/auto-focus.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilteringComponent } from './select-filtering/select-filtering.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from 'ng-boosted';

@NgModule({
  declarations: [SelectFilteringComponent],
  exports: [SelectFilteringComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgBoostedModule,
    FormsModule
  ]
})
export class SelectsModule { }
