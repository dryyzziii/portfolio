import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { ProjetComponent } from '../../component/projet/projet.component';
import { NgFor, NgIf } from '@angular/common';
import { projet } from '../../classe/projets';
import { ProjetsService } from '../../services/projets.service';
import { ActivatedRoute } from '@angular/router';
import { DownloadButtonComponent } from '../../component/download-button/download-button.component';
import { HeaderPortComponent } from '../../component/header-port/header-port.component';

@Component({
  selector: 'app-portefeuille',
  standalone: true,
  imports: [ProjetComponent, HeaderPortComponent,NgFor, NgIf, DownloadButtonComponent],
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.scss']
})
export class PortefeuilleComponent {
  project: projet | null = null;
  currentImage: string | null = null;
  color:string =  "#00b5ff"
  categorie!: string[];

  constructor(private route: ActivatedRoute, private projetsService: ProjetsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      this.projetsService.setProjectById(projectId);
    });
    this.categorie = ["home","about", "portfolio", "contact", 'projets']

    this.projetsService.getProject().subscribe(project => {
      this.project = project;
      if (project && project.imageTab!.length > 0) {
        this.currentImage = project.imageTab![0]; // Afficher la première image par défaut
      }
    });
  }

  setCurrentImage(image: string) {
    this.currentImage = image;
  }

  navigateToProject(link: string) {
    window.open(link, '_blank');
  }
  
}
