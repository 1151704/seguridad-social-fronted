import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAfiliacionComponent } from './inicio-afiliacion.component';

describe('InicioAfiliacionComponent', () => {
  let component: InicioAfiliacionComponent;
  let fixture: ComponentFixture<InicioAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAfiliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
