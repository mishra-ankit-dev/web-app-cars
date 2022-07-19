import { Component, OnInit } from '@angular/core';
import { SearchBoxStore } from '@components/search-box/search-box.store';
import { CurrentRouteService } from '@core/services/route';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  configPath = ROUTER_UTILS.config;
  currentRouteURL$!: Observable<string>;

  constructor(
    private _searchBoxStore: SearchBoxStore,
    private _currentRouteService: CurrentRouteService,
  ) {}

  ngOnInit(): void {
    this.currentRouteURL$ = this._currentRouteService.currentRouteURL$;
  }

  routeIsHomeURL(currentRouteURL: string): boolean {
    if (
      currentRouteURL.startsWith(`/${this.configPath.base.home}`) &&
      currentRouteURL.endsWith(`/${this.configPath.base.home}`)
    ) {
      this._searchBoxStore.placeholder = 'Home';
      return true;
    }
    return false;
  }

  routeIsSalesURL(currentRouteURL: string): boolean {
    if (currentRouteURL.startsWith(`/${this.configPath.sale.root}`)) {
      return true;
    }
    return false;
  }

  routeIsAuthURL(currentRouteURL: string): boolean {
    if (currentRouteURL.startsWith(`/${this.configPath.auth.root}`)) {
      return true;
    }
    return false;
  }
}
