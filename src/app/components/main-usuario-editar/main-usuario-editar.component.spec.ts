import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsuarioEditarComponent } from './main-usuario-editar.component';

describe('MainUsuarioEditarComponent', () => {
  let component: MainUsuarioEditarComponent;
  let fixture: ComponentFixture<MainUsuarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUsuarioEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
