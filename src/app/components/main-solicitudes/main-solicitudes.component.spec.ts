import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSolicitudesComponent } from './main-solicitudes.component';

describe('MainSolicitudesComponent', () => {
  let component: MainSolicitudesComponent;
  let fixture: ComponentFixture<MainSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
