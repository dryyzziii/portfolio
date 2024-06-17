import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { SkillsTreeComponent } from '../skillstree/skillstree.component';
import { PassionCardComponent } from '../competence-card/competence-card.component';
import { CardIUTComponent } from '../card-iut/card-iut.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [LottieComponent, SkillsTreeComponent, PassionCardComponent, CardIUTComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  reactAnimation = {
    path: '/assets/json/react.json',
  };
  pythonAnimation = {
    path: '/assets/json/python.json',
  };
  cAnimation = {
    path: '/assets/json/C.json',
  };
  sqlAnimation = {
    path: '/assets/json/mysql.json',
  };
  javaAnimation = {
    path: '/assets/json/javascript.json',
  };
  htmlAnimation = {
    path: '/assets/json/html.json',
  };
  cssAnimation = {
    path: '/assets/json/css.json',
  };
  angularAnimation = {
    path: '/assets/json/angular.json',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const items = this.el.nativeElement.querySelectorAll('.skill-item');
    const angleStep = (2 * Math.PI) / items.length;
    const radius = 200; // Adjust as necessary

    items.forEach((item: any, index: any) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      this.renderer.setStyle(item, 'transform', `translate(${x}px, ${y}px)`);
    });
  }
}
