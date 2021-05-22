import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsuariosComponent } from './main-usuarios.component';

describe('MainUsuariosComponent', () => {
  let component: MainUsuariosComponent;
  let fixture: ComponentFixture<MainUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
