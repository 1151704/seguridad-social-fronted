import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMostrarPagoComponent } from './inicio-mostrar-pago.component';

describe('InicioMostrarPagoComponent', () => {
  let component: InicioMostrarPagoComponent;
  let fixture: ComponentFixture<InicioMostrarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioMostrarPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMostrarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
