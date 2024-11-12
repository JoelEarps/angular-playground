import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyGitInfoService } from '@zenobe-onboarding-app/my-git-info';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zenobe-onboarding-app';
  gitInfo$ = inject(MyGitInfoService).getGitInfo();

  // constructor(private readonly gitInfoService: MyGitInfoService) {
  //   this.gitInfoService.getGitInfo();
  // }
}
