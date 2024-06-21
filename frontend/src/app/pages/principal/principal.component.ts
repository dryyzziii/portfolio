import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  WritableSignal,
  effect,
} from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { LottieComponent } from 'ngx-lottie';
import { DownloadButtonComponent } from '../../component/download-button/download-button.component';
import { AboutmeComponent } from '../../component/aboutme/aboutme.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../services/navigation-service.service';
import { ProjetsLigneComponent } from '../../component/projets-ligne/projets-ligne.component';
import { projet } from '../../classe/projets';
import { button } from '../../classe/button';
import { ProjectpresentationComponent } from '../../component/projectpresentation/projectpresentation.component';
import { NgFor, NgIf } from '@angular/common';
import { ContactMeComponent } from '../../component/contact-me/contact-me.component';
import { ProjetsService } from '../../services/projets.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LoaderService } from '../../services/loader.service';
import { LoadingComponent } from '../../component/loading/loading.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    LottieComponent,
    AnimateOnScrollDirective,
    HeaderComponent,
    NgFor,
    DownloadButtonComponent,
    AboutmeComponent,
    ProjetsLigneComponent,
    ProjectpresentationComponent,
    ContactMeComponent,
    LoadingComponent,
    NgIf
  ],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit, OnDestroy {
  options = {
    path: '/assets/json/code-icons.json',
  };
  buttonCV: button = new button(
    'Télécharger mon CV',
    'assets/CV.pdf',
    'assets/svg/download.svg',
    'CV.pdf'
  );
  projects: projet[] = [];
  private projectsSubscription: Subscription | undefined;
  categorie = ['home', 'about', 'portfolio', 'contact', 'projets'];
  public currentLoaderStatus: WritableSignal<any> =
    this.loaderService.currentLoaderStatus;
  private isNavigating = false;
  private scrollTimeout: any;
  private navigationSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private projetsService: ProjetsService,
    private navigationService: NavigationService,
    private projectService: ProjetsService
  ) {
    effect(() => {
      const a = this.currentLoaderStatus(); 
    });
  }

  ngOnInit() {
    this.projectsSubscription = this.projetsService
      .getProjects()
      .subscribe((projects) => {
        this.projects = projects;
      }); // Définir les projets dans le service
    this.navigationSubscription =
      this.navigationService.navigateToCategory$.subscribe((category) => {
        this.scrollToCategory(category);
      });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(() => {
      if (this.isNavigating) {
        return;
      }

      const sections = this.categorie.map((category) =>
        document.getElementById(category)
      );
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.25) {
            const fragment = section.id;
            this.router.navigate([], { fragment: fragment });
            break;
          }
        }
      }
    }, 0); // Adjust debounce time as needed
  }

  scrollToCategory(category: string) {
    this.isNavigating = true;
    this.router.navigate([], { fragment: category });
    document.getElementById(category)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      this.isNavigating = false;
    }, 1000); // Adjust timeout as needed to match animation duration
  }
}
