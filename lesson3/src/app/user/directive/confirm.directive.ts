import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  constructor() { }

  @HostListener('click')
  public confirm() {
    console.log('clicked');
    let result = window.confirm('Are you sure????');
    if (result) {
      this.onConfirm.emit();
    }
  }

  @Output()
  public onConfirm = new EventEmitter();


}