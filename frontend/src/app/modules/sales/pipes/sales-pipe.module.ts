import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterCarsPipe } from './filter-cars.pipe';
import { FilterCustomersPipe } from './filter-customers.pipe';
import { FilterSalesPipe } from './filter-sales.pipe';

@NgModule({
  declarations: [FilterSalesPipe, FilterCarsPipe, FilterCustomersPipe],
  imports: [CommonModule],
  exports: [FilterSalesPipe, FilterCarsPipe, FilterCustomersPipe],
})
export class SalesPipeModule {}
