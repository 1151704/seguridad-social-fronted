import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarOrdenComponent } from './cargar-orden.component';

describe('CargarOrdenComponent', () => {
  let component: CargarOrdenComponent;
  let fixture: ComponentFixture<CargarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
