import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First12Component } from './first12.component';

describe('First12Component', () => {
  let component: First12Component;
  let fixture: ComponentFixture<First12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(First12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
