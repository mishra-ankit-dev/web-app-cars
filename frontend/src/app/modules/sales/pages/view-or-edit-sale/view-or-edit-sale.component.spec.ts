import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrEditSaleComponent } from './view-or-edit-sale.component';

describe('ViewOrEditSaleComponent', () => {
  let component: ViewOrEditSaleComponent;
  let fixture: ComponentFixture<ViewOrEditSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOrEditSaleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOrEditSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
