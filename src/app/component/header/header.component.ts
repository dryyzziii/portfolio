import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() categorie: string[] = [];
  activeCategory: string = '';

  constructor(private router: Router, private navigationService: NavigationService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const currentFragment = event.urlAfterRedirects.split('#')[1];
        this.activeCategory = this.categorie.includes(currentFragment) ? currentFragment : '';
      });

    const initialFragment = this.router.url.split('#')[1];
    this.activeCategory = this.categorie.includes(initialFragment) ? initialFragment : '';
  }

  navigateToCategory(category: string) {
    this.navigationService.navigateToCategory(category);
  }
}
