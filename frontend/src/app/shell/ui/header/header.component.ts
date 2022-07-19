import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { AuthService } from '@modules/auth/services/auth.service';
import { UserService } from '@modules/auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  path = ROUTER_UTILS.config;
  isNavbarOpen = false;

  ngOnInit(): void {
    document.querySelector('#menu-toggler')?.addEventListener('click', () => {
      if (document.querySelector('app-navbar')?.classList.contains('hidden')) {
        document.querySelector('app-navbar')?.classList.remove('hidden');
      } else {
        document.querySelector('app-navbar')?.classList.add('hidden');
      }
    });
  }
}
