import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignOutPage } from './pages/sign-out/sign-out.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTER_UTILS.config.auth.signIn,
  },
  {
    path: ROUTER_UTILS.config.auth.signIn,
    component: SignInPage,
  },
  {
    path: ROUTER_UTILS.config.auth.signUp,
    component: SignUpPage,
  },
  {
    path: ROUTER_UTILS.config.auth.signOut,
    component: SignOutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
