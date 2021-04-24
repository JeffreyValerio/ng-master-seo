import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiespagesComponent } from './cookiespages/cookiespages.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', component: CookiespagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiesRoutingModule {}
