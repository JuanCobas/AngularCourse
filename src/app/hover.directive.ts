import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  
  @Input() color:string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement)
   }

  ngOnInit(): void {
      //this.element.nativeElement.style.backgroundColor = this.color;
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

}
