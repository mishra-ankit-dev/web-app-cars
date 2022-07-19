import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FilterCustomersStore } from '../components/filter-customers/filter-customers.store';
import { CustomersStore } from '../store/customers.store';

@Pipe({
  name: 'filterCustomers',
})
export class FilterCustomersPipe implements PipeTransform {
  constructor(
    private _customersStore: CustomersStore,
    private _filterCustomersStore: FilterCustomersStore,
  ) {}

  transform(customers$: Observable<ICustomer[]>): Observable<ICustomer[]> {
    this._filterCustomersStore.placeholder = 'By Customer id';
    this._filterCustomersStore.filterCustomersTypedKeywords = '';
    return combineLatest([
      customers$,
      this._customersStore.customerFilterKey$,
      this._filterCustomersStore.filterCustomersKeywords$,
    ]).pipe(
      map(([customers, customersFilterKey, searchTerm]) =>
        searchTerm === '' && customersFilterKey !== 'CustomerID'
          ? customers
          : customers.filter((customer: ICustomer) =>
              customer.id
                .toString()
                .replaceAll(' ', '')
                .toUpperCase()
                .includes(searchTerm.replaceAll(' ', '').toUpperCase()),
            ),
      ),
    );
  }
}
