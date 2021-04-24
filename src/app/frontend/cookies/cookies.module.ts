import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesRoutingModule } from './cookies-routing.module';
import { CookiespagesComponent } from './cookiespages/cookiespages.component';


@NgModule({
  declarations: [
    CookiespagesComponent
  ],
  imports: [
    CommonModule,
    CookiesRoutingModule
  ]
})
export class CookiesModule { }
