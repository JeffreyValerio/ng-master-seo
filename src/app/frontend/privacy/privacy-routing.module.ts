import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacypageComponent } from './privacypage/privacypage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: PrivacypageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyRoutingModule {}
