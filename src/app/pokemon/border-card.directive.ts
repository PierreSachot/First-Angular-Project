import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  DEFAULT_COLOR = "rgba(0,0,0,0.0)";
  HOVER_COLOR = "#009688";
  @Input('appBorderCard') borderColor: string; //alias

  constructor(private el: ElementRef) {
    this.setBorder(this.DEFAULT_COLOR);
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.HOVER_COLOR);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.DEFAULT_COLOR);
   }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
