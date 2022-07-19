import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthNavbarModule } from '@modules/auth/components/auth-navbar/auth-navbar.module';
import { SalesNavbarModule } from '@modules/sales/components/sales-navbar/sales-navbar.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, AuthNavbarModule, SalesNavbarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
