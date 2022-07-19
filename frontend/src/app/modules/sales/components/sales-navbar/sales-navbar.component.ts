import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils';

@Component({
  selector: 'app-sales-navbar',
  templateUrl: './sales-navbar.component.html',
  styleUrls: ['./sales-navbar.component.scss'],
})
export class SalesNavbarComponent {
  salesPath = ROUTER_UTILS.config.sale;
}
