import { Component, Input } from '@angular/core';
import { projet } from '../../classe/projets';
import { ProjetsService } from '../../services/projets.service';
import { Router } from '@angular/router';
import { button } from '../../classe/button';
import { HeaderPortComponent } from '../../component/header-port/header-port.component';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../services/navigation-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [HeaderPortComponent, NgFor],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  categorie!: string[];
  private projectsSubscription: Subscription | undefined;
  projects: projet[] = [];

  constructor(private projetsService: ProjetsService,private router: Router) {
    this.categorie = ["home","about", "portfolio", "contact" , "projets"]
  }

  setProject(projet: projet) {
    this.router.navigate(['/portfolio', projet.id]);
  }

  ngOnInit() {
    this.projectsSubscription = this.projetsService
      .getProjects()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }
}
