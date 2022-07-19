import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTER_UTILS } from '@core/utils';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from '@shell/ui/not-found/not-found.page';
import { LayoutModule } from '@shell/ui/layout/layout.module';

const APP_ROUTES: Routes = [
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Home',
      robots: 'index, follow',
      description: 'Application homepage.',
    },
  },
  {
    path: ROUTER_UTILS.config.sale.root,
    loadChildren: () =>
      import('@modules/sales/sales.module').then((m) => m.SalesModule),
    data: {
      title: 'Home',
      robots: 'index, follow',
      description: 'Application homepage.',
    },
  },
  {
    path: ROUTER_UTILS.config.auth.root,
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
    data: {
      title: 'Home',
      robots: 'index, follow',
      description: 'User Authentication.',
    },
  },
  {
    path: '**',
    loadChildren: () =>
      import('@shell/ui/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
    component: NotFoundPage,
    data: {
      title: 'Not Found',
      robots: 'index, follow',
      description: 'Page not found.',
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule, LayoutModule],
})
export class WebShellModule {}
