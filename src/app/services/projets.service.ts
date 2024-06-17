import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { projet } from '../classe/projets';
import { button } from '../classe/button';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private projectsSubject = new BehaviorSubject<projet[]>([]);
  private projectSubject = new BehaviorSubject<projet | null>(null);

  constructor() {
    // Vous pouvez initialiser des projets ici ou les obtenir d'une API
    const initialProjects: projet[] = [
      new projet(
        1,
        'assets/images/gehtKaufen.PNG',
        "Geht Kaufen",
        "Geht Kaufen est un projet réalisé avec Symfony. Créé durant mon 4ème semestre pour apprendre le framework PHP Symfony, ce projet a été réalisé en groupe de cinq personnes. Son objectif était de créer une application de liste de courses permettant aux utilisateurs de partager leur liste et de répartir les dépenses entre les participants. Cette application est particulièrement utile pour des colocations, des couples, des amis partageant les courses pour une fête ou des vacances.",  
        new button("Lien vers le projet", "https://gitlab.com/example-project1", "assets/svg/link.svg"),
        'Janvier-avril 2024',
        ['assets/images/gehtKaufen1.PNG', 'assets/images/gehtKaufen2.PNG']
      ),
      new projet(
        2,
        'assets/images/devMobile.png',
        "O'couverts",
        "O'couverts est une application mobile développée en Kotlin. Créée durant mon 4ème semestre pour apprendre le développement Android, ce projet a été réalisé en groupe de deux personnes. Son objectif était de créer une application de recherche de lieux où manger, tels que des restaurants, fast-foods, bars-restaurants, etc. Elle utilise l'API Google Maps pour faciliter la recherche du lieu idéal et offrir une meilleure expérience utilisateur.",
        new button("Lien vers le projet", "https://gitlab.com/example-project2", "assets/svg/link.svg"),
        'Janvier-avril 2024',
        ['assets/images/devMobile1.PNG', 'assets/images/devMobile2.PNG']
      ),
      new projet(
        3,
        'assets/images/kiks.png',
        "4kicks",
        "4kicks est une application web développée avec le framework React. Créée tout au long de ma deuxième année de BUT, ce projet a été tutoré par un professeur et réalisé en groupe de quatre personnes. Son objectif était de créer une application web complète, fonctionnelle et professionnelle, maintenable par de vrais clients grâce à un tableau de bord administrateur. Ce projet est un site web de vente de sneakers en ligne, avec panier, favoris, paiement sécurisé via PayPal, gestion des comptes, etc. En bref, tout ce qu'un véritable site de vente en ligne doit offrir.",
        new button("Lien vers le projet", "https://gitlab.com/example-project3", "assets/svg/link.svg"),
        'septembre 2023 - avril 2024',
        ['assets/images/kiks1.png', 'assets/images/kiks2.png','assets/images/kiks3.png', 'assets/images/kiks4.png','assets/images/kiks5.png']
      )
    ];
    this.setProjects(initialProjects);
  }

  setProjects(projects: projet[]) {
    this.projectsSubject.next(projects);
  }

  getProjects(): Observable<projet[]> {
    return this.projectsSubject.asObservable();
  }

  setProjectById(id: number) {
    const projects = this.projectsSubject.getValue();
    const project = projects.find(p => p.id === id) || null;
    this.projectSubject.next(project);
  }

  getProject(): Observable<projet | null> {
    return this.projectSubject.asObservable();
  }
}
