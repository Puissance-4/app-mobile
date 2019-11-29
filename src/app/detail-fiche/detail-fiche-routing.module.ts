import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFichePage } from './detail-fiche.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFichePageRoutingModule {}
