import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSolicitudesEditarComponent } from './main-solicitudes-editar.component';

describe('MainSolicitudesEditarComponent', () => {
  let component: MainSolicitudesEditarComponent;
  let fixture: ComponentFixture<MainSolicitudesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSolicitudesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSolicitudesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
