import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOrdenesComponent } from './main-ordenes.component';

describe('MainOrdenesComponent', () => {
  let component: MainOrdenesComponent;
  let fixture: ComponentFixture<MainOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
