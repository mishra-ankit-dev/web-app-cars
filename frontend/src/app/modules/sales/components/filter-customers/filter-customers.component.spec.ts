import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomersComponent } from './filter-customers.component';

describe('FilterCustomersComponent', () => {
  let component: FilterCustomersComponent;
  let fixture: ComponentFixture<FilterCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCustomersComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
