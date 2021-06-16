import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClienteEditarComponent } from './main-cliente-editar.component';

describe('MainClienteEditarComponent', () => {
  let component: MainClienteEditarComponent;
  let fixture: ComponentFixture<MainClienteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClienteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClienteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
