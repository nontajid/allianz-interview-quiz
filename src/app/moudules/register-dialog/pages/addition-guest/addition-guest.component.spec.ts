import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionGuestComponent } from './addition-guest.component';

describe('AdditionGuestComponent', () => {
  let component: AdditionGuestComponent;
  let fixture: ComponentFixture<AdditionGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
