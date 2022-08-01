import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';
import { SaleComponent } from './components/sale/sale.component';
import { CreateSaleComponent } from './pages/create-sale/create-sale.component';
import { SalesFilterComponent } from './components/sales-filter/sales-filter.component';
import { SharedModule } from '@components/shared.module';
import { SalesPipeModule } from './pipes/sales-pipe.module';
import { FilterCarsComponent } from './components/filter-cars/filter-cars.component';
import { FilterCustomersComponent } from './components/filter-customers/filter-customers.component';
import { ViewOrEditSaleComponent } from './pages/view-or-edit-sale/view-or-edit-sale.component';
import { CarsComponent } from './components/car/car.component';
import { CustomersComponent } from './components/customer/customer.component';
import { SalesHomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ListSalesComponent,
    SaleComponent,
    SalesHomeComponent,
    CreateSaleComponent,
    ViewOrEditSaleComponent,
    SalesFilterComponent,
    FilterCarsComponent,
    FilterCustomersComponent,
    CarsComponent,
    CustomersComponent,
  ],
  imports: [CommonModule, SalesRoutingModule, SalesPipeModule, SharedModule],
})
export class SalesModule {}
