import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation-service.service';
import { NavigationPortService } from '../../services/navigation-port.service';

@Component({
  selector: 'app-header-port',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header-port.component.html',
  styleUrl: './header-port.component.scss'
})
export class HeaderPortComponent implements OnInit {
  @Input() categorie: string[] = [];
  activeCategory: string = 'portfolio';

  constructor(private router: Router, private navigationService: NavigationPortService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const currentFragment = event.urlAfterRedirects.split('#')[1];
        if (this.categorie.includes(currentFragment)) {
          this.activeCategory = currentFragment;
        } else {
          this.activeCategory = 'portfolio';
        }
      });

    const initialFragment = this.router.url.split('#')[1];
    this.activeCategory = this.categorie.includes(initialFragment) ? initialFragment : 'portfolio';
  }

  navigateToCategory(category: string) {
    this.navigationService.navigateToCategory(category);
  }
}

