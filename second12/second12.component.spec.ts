import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second12Component } from './second12.component';

describe('Second12Component', () => {
  let component: Second12Component;
  let fixture: ComponentFixture<Second12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Second12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Second12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
