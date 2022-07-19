import { Component, OnInit } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { environment } from '@environments/environment';
import { AuthService } from '@modules/auth/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  isSidebarOpen = false;
  configPath = ROUTER_UTILS.config;
  ADMIN_URL = environment.ADMIN_URL;
  isLoggedIn$!: Observable<boolean>;

  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;
  }

  navigateToAdmin(): void {
    window.open(this.ADMIN_URL);
  }
}
