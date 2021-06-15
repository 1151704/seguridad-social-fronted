import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOrdenServicioComponent } from './mostrar-orden-servicio.component';

describe('MostrarOrdenServicioComponent', () => {
  let component: MostrarOrdenServicioComponent;
  let fixture: ComponentFixture<MostrarOrdenServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarOrdenServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
