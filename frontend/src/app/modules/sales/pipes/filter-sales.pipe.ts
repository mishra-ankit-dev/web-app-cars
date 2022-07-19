import { Pipe, PipeTransform } from '@angular/core';
import { SearchBoxStore } from '@components/search-box/search-box.store';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SalesStore } from '../store/sales.store';

@Pipe({
  name: 'filterSales',
})
export class FilterSalesPipe implements PipeTransform {
  constructor(
    private _salesStore: SalesStore,
    private _searchBoxStore: SearchBoxStore,
  ) {}

  transform(sales: ISale[]): Observable<ISale[]> {
    this._searchBoxStore.placeholder = 'By Sales';
    this._searchBoxStore.searchBoxTypedKeywords = '';
    return combineLatest([
      of(sales),
      this._salesStore.saleFilterKey$,
      this._searchBoxStore.searchBoxKeywords$,
    ]).pipe(
      map(([sales, salesFilterKey, searchTerm]) =>
        searchTerm === ''
          ? sales
          : sales.filter((sale: ISale) =>
              salesFilterKey === 'SalesID'
                ? sale.id
                    .toString()
                    .replaceAll(' ', '')
                    .toUpperCase()
                    .includes(searchTerm.replaceAll(' ', '').toUpperCase())
                : sale.customers
                    .map((customer: ICustomer) => customer.id.toString())
                    .includes(searchTerm),
            ),
      ),
    );
  }
}
