import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'page-principal-frais',
    loadChildren: () => import('./page-principal-frais/page-principal-frais.module').then( m => m.PagePrincipalFraisPageModule)
  },
  {
    path: 'detail-fiche',
    loadChildren: () => import('./detail-fiche/detail-fiche.module').then( m => m.DetailFichePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
