import { AboutUsComponent } from './about-us/about-us.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-information',
    component: UserInformationComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path:"**",
    redirectTo: 'user-information'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
