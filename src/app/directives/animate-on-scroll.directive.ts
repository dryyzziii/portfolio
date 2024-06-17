import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input() animationClass: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Masquer l'élément par défaut
    

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Afficher l'élément et ajouter la classe d'animation
          
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
  }
