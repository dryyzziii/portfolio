import { Directive, ElementRef, Renderer2, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDynamicTransform]'
})
export class DynamicTransformDirective implements AfterViewInit {
  @Input() appDynamicTransform?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateTransform();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateTransform();
  }

  private updateTransform() {
    const elementWidth = this.el.nativeElement.offsetWidth;
    let translateXValue = '200px';

    if (elementWidth === 150) {
      translateXValue = '100px';
    }

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${translateXValue})`);
  }
}
