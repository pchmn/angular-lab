import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivePipe } from './../home/active.pipe';
import { PagesModule } from './../pages.module';
import { FormExamplesRoutingModule } from './form-examples-routing.module';
import { FormExamplesComponent } from './form-examples.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [TemplateDrivenFormComponent, ReactiveFormComponent, FormExamplesComponent, ActivePipe],
  imports: [
    CommonModule,
    PagesModule,
    FormExamplesRoutingModule
  ],
  providers: [DatePipe, ActivePipe]
})
export class FormExamplesModule { }
