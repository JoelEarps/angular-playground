import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  fetchGitInfo,
  MyGitInfoService,
  selectGitInfo,
} from '@zenobe-onboarding-app/my-git-info';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MainNavComponent } from './components/navigation.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    RouterLink,
    RouterOutlet,
    CommonModule,
    MainNavComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'zenobe-onboarding-app';

  constructor(private store: Store) {}

  // public gitInfo$ = this.store.select(selectGitInfo);
  ngOnInit() {
    this.store.dispatch(fetchGitInfo());
  }
}
