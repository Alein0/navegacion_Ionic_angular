import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mazda',
    loadComponent: () => import('../app/mazda/mazda.page').then( m => m.MazdaPage)
  },
  {
    path: 'nissan',
    loadComponent: () => import('../app/nissan/nissan.page').then( m => m.NissanPage)
  },
];