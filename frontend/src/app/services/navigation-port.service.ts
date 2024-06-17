import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationPortService {

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/home'], { fragment: category });
  }
}
