import { NgModule } from '@angular/core';
import { HomeComponent } from '../../../HttpServices/src/app/home/home.component';
import { UserDetailsComponent } from '../../../HttpServices/src/app/user-details/user-details.component';
import { UserComponent } from '../../../HttpServices/src/app/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from '../../../HttpServices/src/app/user-form/user-form.component';

const routes: Routes = [
  { path: ``, component: HomeComponent },
  { path: `home`, component: HomeComponent },
  { path: `user/:id`, component: UserDetailsComponent },
  { path: `edit/:id`, component: UserFormComponent },
  { path: `user`, component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
