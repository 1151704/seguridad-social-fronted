import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlanEditarComponent } from './main-plan-editar.component';

describe('MainPlanEditarComponent', () => {
  let component: MainPlanEditarComponent;
  let fixture: ComponentFixture<MainPlanEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlanEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlanEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
