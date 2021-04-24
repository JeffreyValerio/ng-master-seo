import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: '',
    loadChildren: () =>
      import('./frontend/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'aviso-legal',
    loadChildren: () =>
      import('./frontend/legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./frontend/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('./frontend/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'politica-de-cookies',
    loadChildren: () =>
      import('./frontend/cookies/cookies.module').then((m) => m.CookiesModule),
  },
  {
    path: 'politica-de-privacidad',
    loadChildren: () =>
      import('./frontend/privacy/privacy.module').then((m) => m.PrivacyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
