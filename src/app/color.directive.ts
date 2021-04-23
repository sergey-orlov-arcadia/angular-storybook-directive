import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[color]'
})
export class ColorDirective {
  @HostBinding('class') @Input() color;
}
