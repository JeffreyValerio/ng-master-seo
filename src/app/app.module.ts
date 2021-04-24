import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './frontend/shared/footer/footer.component';
import { NavbarComponent } from './frontend/shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
