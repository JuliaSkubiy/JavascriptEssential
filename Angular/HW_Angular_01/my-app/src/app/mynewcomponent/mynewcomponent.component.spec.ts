import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewcomponentComponent } from './mynewcomponent.component';

describe('MynewcomponentComponent', () => {
  let component: MynewcomponentComponent;
  let fixture: ComponentFixture<MynewcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
