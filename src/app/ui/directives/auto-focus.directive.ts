import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('input');
    console.log('input', input);
    if (input) {
      input.focus({ preventScroll: true });
    }
  }

}
