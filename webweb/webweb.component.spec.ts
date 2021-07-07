import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebwebComponent } from './webweb.component';

describe('WebwebComponent', () => {
  let component: WebwebComponent;
  let fixture: ComponentFixture<WebwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
