import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigateToCategorySubject = new Subject<string>();
  navigateToCategory$ = this.navigateToCategorySubject.asObservable();

  navigateToCategory(category: string) {
    this.navigateToCategorySubject.next(category);
  }
}
