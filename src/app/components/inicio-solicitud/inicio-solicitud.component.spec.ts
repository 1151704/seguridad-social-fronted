import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSolicitudComponent } from './inicio-solicitud.component';

describe('InicioSolicitudComponent', () => {
  let component: InicioSolicitudComponent;
  let fixture: ComponentFixture<InicioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
