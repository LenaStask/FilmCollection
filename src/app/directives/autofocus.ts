import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus implements AfterViewInit {
  el = inject(ElementRef);

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
