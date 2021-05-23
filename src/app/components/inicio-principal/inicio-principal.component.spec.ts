import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPrincipalComponent } from './inicio-principal.component';

describe('InicioPrincipalComponent', () => {
  let component: InicioPrincipalComponent;
  let fixture: ComponentFixture<InicioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
