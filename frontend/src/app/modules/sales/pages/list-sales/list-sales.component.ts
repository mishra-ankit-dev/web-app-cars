import { Component, OnInit } from '@angular/core';
import { SalesService } from '@modules/sales/services/sales.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
})
export class ListSalesComponent implements OnInit {
  constructor(private _salesService: SalesService) {}

  sales$!: Observable<ISale[]>;

  ngOnInit(): void {
    this.sales$ = this._salesService.sales$();
  }

  // REFRESH UI ON SALES CRUD OPERATIONS
  onSaleDelete(event: any): void {
    console.log(event);
    this.ngOnInit();
  }
}
