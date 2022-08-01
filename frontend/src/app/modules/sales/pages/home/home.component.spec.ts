import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SalesHomeComponent } from './home.component';

describe('SalesHomeComponent', () => {
  let component: SalesHomeComponent;
  let fixture: ComponentFixture<SalesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesHomeComponent],
      imports: [RouterTestingModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
