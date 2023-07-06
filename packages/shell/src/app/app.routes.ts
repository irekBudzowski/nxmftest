import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'vlaas',
    loadChildren: () => import('vlaas/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ssmo',
    loadChildren: () => import('ssmo/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dri-app',
    loadChildren: () =>
      import('dri-app/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
