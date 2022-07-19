import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchBoxStore } from '@components/search-box/search-box.store';
import { SalesFilterForm } from '@modules/sales/forms/sales.form';
import { SalesStore } from '@modules/sales/store/sales.store';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sales-filter',
  templateUrl: './sales-filter.component.html',
  styleUrls: ['./sales-filter.component.scss'],
})
export class SalesFilterComponent implements OnInit, OnDestroy {
  constructor(
    private _formBuilder: FormBuilder,
    private _searchBoxStore: SearchBoxStore,
    private _salesStore: SalesStore,
  ) {}

  destroy$ = new Subject();

  salesFilterForm!: FormGroup;
  salesFilterFormObj!: SalesFilterForm;

  ngOnInit(): void {
    this.salesFilterFormObj = new SalesFilterForm(this._formBuilder);
    this.salesFilterForm = this.salesFilterFormObj.InitForm();

    this.salesFilterForm
      .get('filter')
      ?.valueChanges.pipe(
        takeUntil(this.destroy$),
        tap((specFilterKey) => {
          this._searchBoxStore.searchBoxTypedKeywords = '';
          this._searchBoxStore.placeholder = `by ${specFilterKey}`;
          this._salesStore.saleFilterKey = specFilterKey;
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
