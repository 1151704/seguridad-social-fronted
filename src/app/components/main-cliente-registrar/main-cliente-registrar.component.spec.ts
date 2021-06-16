import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClienteRegistrarComponent } from './main-cliente-registrar.component';

describe('MainClienteRegistrarComponent', () => {
  let component: MainClienteRegistrarComponent;
  let fixture: ComponentFixture<MainClienteRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClienteRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClienteRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
