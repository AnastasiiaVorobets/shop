import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  private sidebarVisibility = new BehaviorSubject<boolean>(false);
  sidebarVisibility$ = this.sidebarVisibility.asObservable();

  constructor() { }

  toggleSidebarVisibility(): void {
    this.sidebarVisibility.next(!this.sidebarVisibility.value);
  }

  closeSidebar(): void {
    this.sidebarVisibility.next(false);
  }
}
