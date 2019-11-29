import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagePrincipalFraisPageRoutingModule } from './page-principal-frais-routing.module';

import { PagePrincipalFraisPage } from './page-principal-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePrincipalFraisPageRoutingModule
  ],
  declarations: [PagePrincipalFraisPage]
})
export class PagePrincipalFraisPageModule {

}
