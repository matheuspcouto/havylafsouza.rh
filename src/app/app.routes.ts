import { Routes } from '@angular/router';
import { RouteSegment } from './shared/enums/routes-enum';

export const routes: Routes = [
  /* Home routes */
  {
    path: RouteSegment.HOME,
    pathMatch: 'full',
    redirectTo: ''
  }
];
