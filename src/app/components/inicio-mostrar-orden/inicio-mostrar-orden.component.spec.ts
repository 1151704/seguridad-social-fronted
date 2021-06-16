import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMostrarOrdenComponent } from './inicio-mostrar-orden.component';

describe('InicioMostrarOrdenComponent', () => {
  let component: InicioMostrarOrdenComponent;
  let fixture: ComponentFixture<InicioMostrarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioMostrarOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMostrarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
