import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils';
import { isValid, isInValid } from '@core/validators';
import { SalesForm } from '@modules/sales/forms/sales.form';
import { CarsService } from '@modules/sales/services/cars.service';
import { CustomersService } from '@modules/sales/services/customers.service';
import { SalesService } from '@modules/sales/services/sales.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss'],
})
export class CreateSaleComponent implements OnInit, OnDestroy {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _carsService: CarsService,
    private _salesService: SalesService,
    private _customersService: CustomersService,
  ) {}

  destroy$ = new Subject();

  isValid = isValid;
  isInValid = isInValid;
  salesForm!: FormGroup;
  private _salesFormObj!: SalesForm;

  cars$!: Observable<ICar[]>;
  customers$!: Observable<ICustomer[]>;

  SALES_PATH = ROUTER_UTILS.config.sale;

  ngOnInit(): void {
    this._salesFormObj = new SalesForm(this._formBuilder);
    this.salesForm = this._salesFormObj.InitForm();

    this.cars$ = this._carsService.cars$();
    this.customers$ = this._customersService.customers$();
  }

  value(controlName: string): AbstractControl {
    return this.salesForm.controls[controlName];
  }

  CreateSale() {
    console.log(this.salesForm.value);
    this._salesService
      .CreateSale$(this.salesForm.value)
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
