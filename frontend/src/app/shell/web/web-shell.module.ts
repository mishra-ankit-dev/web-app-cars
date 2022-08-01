import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTER_UTILS } from '@core/utils';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from '@shell/ui/not-found/not-found.page';
import { LayoutModule } from '@shell/ui/layout/layout.module';
import { AuthGuard } from '@core/guards';

const APP_ROUTES: Routes = [
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTER_UTILS.config.sale.root,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: ROUTER_UTILS.config.auth.root,
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@shell/ui/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule, LayoutModule],
})
export class WebShellModule {}
