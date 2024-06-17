import { Component, Input } from '@angular/core';
import { projet } from '../../classe/projets';
import { button } from '../../classe/button';
import { ProjetsService } from '../../services/projets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectpresentation',
  standalone: true,
  imports: [],
  templateUrl: './projectpresentation.component.html',
  styleUrl: './projectpresentation.component.scss'
})
export class ProjectpresentationComponent {
  @Input() projet1: projet = new projet(0,'','','', new button('','',''),'');
  @Input() projet2: projet = new projet(0,'','','', new button('','',''),'');
  @Input() projet3: projet = new projet(0,'','','', new button('','',''),'');
  @Input() projet4: projet = new projet(0,'','','', new button('','',''),'');

  constructor(private projetsService: ProjetsService, private router: Router) {}

  setProject(projet: projet) {
    this.router.navigate(['/portfolio', projet.id]);
  }
}
