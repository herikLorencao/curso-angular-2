import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaReativaRoutingModule } from './busca-reativa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LibSearchComponent } from './lib-search/lib-search.component';

@NgModule({
  declarations: [LibSearchComponent],
  imports: [CommonModule, BuscaReativaRoutingModule, ReactiveFormsModule],
})
export class BuscaReativaModule {}
