import { Component, HostListener, Input } from '@angular/core';
import { projet } from '../../classe/projets';
import { NgFor } from '@angular/common';
import { button } from '../../classe/button';
import { DownloadButtonComponent } from '../download-button/download-button.component';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation-service.service';
import { Subscription } from 'rxjs';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-projets-ligne',
  standalone: true,
  imports: [NgFor, DownloadButtonComponent, ContactMeComponent],
  templateUrl: './projets-ligne.component.html',
  styleUrl: './projets-ligne.component.scss'
})
export class ProjetsLigneComponent {
  @Input() projectList: projet[] = [];
  // private isNavigating = false;
  // private scrollTimeout: any;
  // private navigationSubscription: Subscription | undefined;
  // categorie = ['home', 'about', 'portfolio'];

  // constructor(private router: Router, private navigationService: NavigationService) { }

  // ngOnInit() {
  //   this.navigationSubscription = this.navigationService.navigateToCategory$.subscribe(category => {
  //     this.scrollToCategory(category);
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.navigationSubscription) {
  //     this.navigationSubscription.unsubscribe();
  //   }
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (this.scrollTimeout) {
  //     clearTimeout(this.scrollTimeout);
  //   }
  //   this.scrollTimeout = setTimeout(() => {
  //     if (this.isNavigating) {
  //       return;
  //     }

  //     const sections = this.categorie.map(category => document.getElementById(category));
  //     for (const section of sections) {
  //       if (section) {
  //         const rect = section.getBoundingClientRect();
  //         if (rect.top >= 0 && rect.top <= window.innerHeight * 0.25) {
  //           const fragment = section.id;
  //           this.router.navigate([], { fragment: fragment });
  //           break;
  //         }
  //       }
  //     }
  //   }, 0); // Adjust debounce time as needed
  // }

  // scrollToCategory(category: string) {
  //   this.isNavigating = true;
  //   this.router.navigate([], { fragment: category });
  //   document.getElementById(category)?.scrollIntoView({ behavior: 'smooth' });
  //   setTimeout(() => {
  //     this.isNavigating = false;
  //   }, 1000); // Adjust timeout as needed to match animation duration
  // }
}
