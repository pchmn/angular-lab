import { AbstractValueAccessor } from '../abstract-value-accessor';
import { Input } from '@angular/core';

export class AbstractInputComponent<T> extends AbstractValueAccessor<T> {

  @Input() id = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() editable = true;
  @Input() required = false;
}
