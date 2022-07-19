import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils';
import { SalesService } from '@modules/sales/services/sales.service';
import { SalesStore } from '@modules/sales/store/sales.store';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _salesStore: SalesStore,
    private _salesService: SalesService,
  ) {}

  @Input('filteredSale') sale!: ISale;
  @Input('filteredSaleIndex') saleIndex!: number;

  @Output('onSaleDelete')
  onSaleDelete: EventEmitter<ISale> = new EventEmitter<ISale>();

  destroy$ = new Subject();

  SALE_PATH = ROUTER_UTILS.config.sale;

  EditSale(saleToBeEdited: ISale): void {
    this._salesStore.sale = saleToBeEdited;
    this._router.navigate(
      [this.SALE_PATH.viewOrEdit, saleToBeEdited.id, 'edit'],
      {
        relativeTo: this._route.parent,
      },
    );
  }

  ViewSale(saleToBeViewed: ISale): void {
    this._salesStore.sale = saleToBeViewed;
    this._router.navigate(
      [this.SALE_PATH.viewOrEdit, saleToBeViewed.id, 'view'],
      {
        relativeTo: this._route.parent,
      },
    );
  }

  DeleteSale(saleToBeDeleted: ISale): void {
    if (
      confirm(
        `Do you want to delete the Sale with name ${saleToBeDeleted.id} ?\n
It will delete the other entities using this sale.`,
      )
    ) {
      this._salesService
        .deleteSale$(saleToBeDeleted.id)
        .pipe(
          takeUntil(this.destroy$),
          tap(() => this.onSaleDelete.emit(saleToBeDeleted)),
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
