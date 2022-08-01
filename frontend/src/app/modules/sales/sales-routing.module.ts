import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils';
import { CreateSaleComponent } from './pages/create-sale/create-sale.component';
import { SalesHomeComponent } from './pages/home/home.component';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';
import { ViewOrEditSaleComponent } from './pages/view-or-edit-sale/view-or-edit-sale.component';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.sale.home,
    component: SalesHomeComponent,
  },
  { path: ROUTER_UTILS.config.sale.create, component: CreateSaleComponent },
  { path: ROUTER_UTILS.config.sale.viewAll, component: ListSalesComponent },
  {
    path: `${ROUTER_UTILS.config.sale.viewOrEdit}/:id/:mode`,
    component: ViewOrEditSaleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
