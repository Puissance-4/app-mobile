import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePrincipalFraisPage } from './page-principal-frais.page';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipalFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePrincipalFraisPageRoutingModule {}
