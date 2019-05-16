import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table03Component } from './table03.component';

describe('Table03Component', () => {
  let component: Table03Component;
  let fixture: ComponentFixture<Table03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
