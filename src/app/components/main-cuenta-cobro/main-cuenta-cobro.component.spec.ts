import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCuentaCobroComponent } from './main-cuenta-cobro.component';

describe('MainCuentaCobroComponent', () => {
  let component: MainCuentaCobroComponent;
  let fixture: ComponentFixture<MainCuentaCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCuentaCobroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCuentaCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
