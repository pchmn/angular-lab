import { AbstractInputComponent } from './../abstract-input.component';
import { Component, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <input #input class="form-control"
      [type]="type"
      [id]="id"
      [name]="name"
      [placeholder]="placeholder"
      [disabled]="disabled || !editable"
      [required]="required"
      [(ngModel)]="value">
  `,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends AbstractInputComponent<string> {
  @ViewChild('input') inputElt: ElementRef;

  constructor() {
    super();
  }
}
