import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalpageComponent } from './legalpage/legalpage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: LegalpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
