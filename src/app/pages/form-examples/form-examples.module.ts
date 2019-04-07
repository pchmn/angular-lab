import { ActivePipe } from './../home/active.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from './../../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FormExamplesRoutingModule } from './form-examples-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormExamplesComponent } from './form-examples.component';

@NgModule({
  declarations: [TemplateDrivenFormComponent, ReactiveFormComponent, FormExamplesComponent, ActivePipe],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    FormExamplesRoutingModule
  ],
  providers: [DatePipe, ActivePipe]
})
export class FormExamplesModule { }
