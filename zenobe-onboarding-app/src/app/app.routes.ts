import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'githubRepo/:repoName',
    loadComponent: () =>
      import('./components/static-page/static-page.component').then(
        (m) => m.StaticComponent
      ),
  },
];
