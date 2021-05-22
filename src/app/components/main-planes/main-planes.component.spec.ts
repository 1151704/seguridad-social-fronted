import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlanesComponent } from './main-planes.component';

describe('MainPlanesComponent', () => {
  let component: MainPlanesComponent;
  let fixture: ComponentFixture<MainPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
