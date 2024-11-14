import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectGitInfo } from '@zenobe-onboarding-app/my-git-info';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class MainNavComponent {
  constructor(private store: Store) {}

  public gitInfo$ = this.store.select(selectGitInfo);

  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
