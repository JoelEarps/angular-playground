import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  fetchGitInfo,
  MyGitInfoService,
  selectGitInfo,
} from '@zenobe-onboarding-app/my-git-info';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'zenobe-onboarding-app';

  constructor(private store: Store) {}

  public gitInfo$ = this.store.select(selectGitInfo);
  ngOnInit() {
    this.store.dispatch(fetchGitInfo());
  }
}
