import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils';
import { isValid, isInValid } from '@core/validators';
import { SalesForm } from '@modules/sales/forms/sales.form';
import { CarsService } from '@modules/sales/services/cars.service';
import { CustomersService } from '@modules/sales/services/customers.service';
import { SalesService } from '@modules/sales/services/sales.service';
import { Observable, Subject, takeUntil, tap, switchMap } from 'rxjs';

@Component({
  selector: 'app-view-or-edit-sale',
  templateUrl: './view-or-edit-sale.component.html',
  styleUrls: ['./view-or-edit-sale.component.scss'],
})
export class ViewOrEditSaleComponent implements OnInit, OnDestroy {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _carsService: CarsService,
    private _salesService: SalesService,
    private _customersService: CustomersService,
  ) {}

  destroy$ = new Subject();

  mode!: 'view' | 'edit';
  isValid = isValid;
  isInValid = isInValid;
  salesForm!: FormGroup;
  private _salesFormObj!: SalesForm;

  sale$!: Observable<ISale>;

  SALES_PATH = ROUTER_UTILS.config.sale;

  ngOnInit(): void {
    this._salesFormObj = new SalesForm(this._formBuilder);
    this.salesForm = this._salesFormObj.InitForm();

    this.sale$ = this._route.params.pipe(
      tap((routeParams: Params) => (this.mode = routeParams['mode'])),
      switchMap((routeParams: Params) =>
        this._salesService
          .saleById$(routeParams['id'])
          .pipe(tap((sale: ISale) => this.salesForm.patchValue(sale))),
      ),
    );
  }

  value(controlName: string): AbstractControl {
    return this.salesForm.controls[controlName];
  }

  UpdateSale() {
    console.log(this.salesForm.value);
    this._salesService
      .UpdateSale$(this.salesForm.value)
      .pipe(
        takeUntil(this.destroy$),
        tap(() =>
          this._router.navigate([this.SALES_PATH.viewAll], {
            relativeTo: this._route.parent,
          }),
        ),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
