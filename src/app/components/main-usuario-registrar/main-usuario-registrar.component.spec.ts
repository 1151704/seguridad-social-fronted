import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsuarioRegistrarComponent } from './main-usuario-registrar.component';

describe('MainUsuarioRegistrarComponent', () => {
  let component: MainUsuarioRegistrarComponent;
  let fixture: ComponentFixture<MainUsuarioRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUsuarioRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUsuarioRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
