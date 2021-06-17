import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReportesComponent } from './main-reportes.component';

describe('MainReportesComponent', () => {
  let component: MainReportesComponent;
  let fixture: ComponentFixture<MainReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
