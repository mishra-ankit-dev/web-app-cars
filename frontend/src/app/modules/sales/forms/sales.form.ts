import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SalesForm {
  constructor(private _formBuilder: FormBuilder) {}

  salesForm!: FormGroup;

  public InitForm(): FormGroup {
    this.salesForm = this._formBuilder.group({
      id: [null, []],
      dateOfPurchase: [new Date().toISOString().substring(0, 10), []],
      sellingPrice: [0, [Validators.max(1000000)]],
      cars: [[] as ICar[], Validators.required],
      customers: [[] as ICustomer[], Validators.required],
    });
    return this.salesForm;
  }
}

export class SalesFilterForm {
  constructor(private _formBuilder: FormBuilder) {}

  salesFilterForm!: FormGroup;

  public InitForm(): FormGroup {
    this.salesFilterForm = this._formBuilder.group({
      filter: ['SalesID', [Validators.required]],
    });
    return this.salesFilterForm;
  }
}

export class CarsFilterForm {
  constructor(private _formBuilder: FormBuilder) {}

  carsFilterForm!: FormGroup;

  public InitForm(): FormGroup {
    this.carsFilterForm = this._formBuilder.group({
      filter: ['CarID', [Validators.required]],
    });
    return this.carsFilterForm;
  }
}

export class CustomersFilterForm {
  constructor(private _formBuilder: FormBuilder) {}

  customersFilterForm!: FormGroup;

  public InitForm(): FormGroup {
    this.customersFilterForm = this._formBuilder.group({
      filter: ['CustomerID', [Validators.required]],
    });
    return this.customersFilterForm;
  }
}
