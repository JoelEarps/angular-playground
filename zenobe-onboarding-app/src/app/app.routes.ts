import { Route } from '@angular/router';
import { MainNavComponent } from './components/navigation.component';

export const appRoutes: Route[] = [
  {
    path: 'githubRepo/:repoName',
    loadComponent: () =>
      import('./components/static-page/static-page.component').then(
        (m) => m.StaticComponent
      ),
  },
  {
    path: '',
    component: MainNavComponent,
  },
];
