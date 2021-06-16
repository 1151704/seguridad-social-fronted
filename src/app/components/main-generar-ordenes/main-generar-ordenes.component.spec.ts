import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGenerarOrdenesComponent } from './main-generar-ordenes.component';

describe('MainGenerarOrdenesComponent', () => {
  let component: MainGenerarOrdenesComponent;
  let fixture: ComponentFixture<MainGenerarOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGenerarOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGenerarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
