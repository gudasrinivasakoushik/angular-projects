import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcompenentsComponent } from './productcompenents.component';

describe('ProductcompenentsComponent', () => {
  let component: ProductcompenentsComponent;
  let fixture: ComponentFixture<ProductcompenentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcompenentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcompenentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
