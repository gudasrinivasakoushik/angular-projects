import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavajavaComponent } from './javajava.component';

describe('JavajavaComponent', () => {
  let component: JavajavaComponent;
  let fixture: ComponentFixture<JavajavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavajavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavajavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
