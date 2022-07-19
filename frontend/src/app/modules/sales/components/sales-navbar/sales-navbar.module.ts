import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalesNavbarComponent } from './sales-navbar.component';

@NgModule({
  declarations: [SalesNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SalesNavbarComponent],
})
export class SalesNavbarModule {}
