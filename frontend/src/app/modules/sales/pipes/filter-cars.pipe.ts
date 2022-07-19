import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FilterCarsStore } from '../components/filter-cars/filter-cars.store';
import { CarsStore } from '../store/cars.store';

@Pipe({
  name: 'filterCars',
})
export class FilterCarsPipe implements PipeTransform {
  constructor(
    private _carsStore: CarsStore,
    private _filterCarsStore: FilterCarsStore,
  ) {}

  transform(cars$: Observable<ICar[]>): Observable<ICar[]> {
    this._filterCarsStore.placeholder = 'By Car id';
    this._filterCarsStore.filterCarsTypedKeywords = '';
    return combineLatest([
      cars$,
      this._carsStore.carFilterKey$,
      this._filterCarsStore.filterCarsKeywords$,
    ]).pipe(
      map(([cars, carsFilterKey, searchTerm]) =>
        searchTerm === '' && carsFilterKey !== 'CarID'
          ? cars
          : cars.filter((car: ICar) =>
              car.id
                .toString()
                .replaceAll(' ', '')
                .toUpperCase()
                .includes(searchTerm.replaceAll(' ', '').toUpperCase()),
            ),
      ),
    );
  }
}
