import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTabHost]'
})
export class TabHostDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
