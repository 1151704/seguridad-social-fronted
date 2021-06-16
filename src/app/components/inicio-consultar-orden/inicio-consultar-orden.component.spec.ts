import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioConsultarOrdenComponent } from './inicio-consultar-orden.component';

describe('InicioConsultarOrdenComponent', () => {
  let component: InicioConsultarOrdenComponent;
  let fixture: ComponentFixture<InicioConsultarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioConsultarOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioConsultarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
