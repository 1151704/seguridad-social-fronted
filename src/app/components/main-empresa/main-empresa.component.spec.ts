import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmpresaComponent } from './main-empresa.component';

describe('MainEmpresaComponent', () => {
  let component: MainEmpresaComponent;
  let fixture: ComponentFixture<MainEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
