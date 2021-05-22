import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlanRegistrarComponent } from './main-plan-registrar.component';

describe('MainPlanRegistrarComponent', () => {
  let component: MainPlanRegistrarComponent;
  let fixture: ComponentFixture<MainPlanRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlanRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlanRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
