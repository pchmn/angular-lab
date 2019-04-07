import { ControlValueAccessor } from '@angular/forms';
import { Input, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

export abstract class AbstractValueAccessor<T> implements ControlValueAccessor {

  innerValue: T;
  @Input() pipes: { pipe: PipeTransform, args?: any }[];
  @Input() disabled = false;
  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  constructor() { }

  get value() {
    return this.innerValue;
  }

  set value(value: T) {
    this.setValue(value);
    this.propagateChange(value);
  }

  writeValue(value: T): void {
    this.setValue(value);
  }

  private setValue(value: T) {
    this.innerValue = null;
    // Workaround to update view even when value doesn't change
    setTimeout(() => {
      if (this.pipes) {
        this.doPipes(value).then(res => {
          this.innerValue = res;
        });
      } else {
        this.innerValue = value;
      }
    });

  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private async doPipes(value: T) {
    let valuePiped = value;
    for (const item of this.pipes) {
      const pipeRes = item.pipe.transform(valuePiped, item.args);
      if (pipeRes instanceof Observable || pipeRes instanceof Subject) {
        valuePiped = await pipeRes.toPromise();
      } else {
        valuePiped = pipeRes;
      }
    }
    return valuePiped;
  }
}
