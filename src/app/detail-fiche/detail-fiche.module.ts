import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFichePageRoutingModule } from './detail-fiche-routing.module';

import { DetailFichePage } from './detail-fiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFichePageRoutingModule
  ],
  declarations: [DetailFichePage]
})
export class DetailFichePageModule {}
