import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremacionesComponent } from './cremaciones.component';

describe('CremacionesComponent', () => {
  let component: CremacionesComponent;
  let fixture: ComponentFixture<CremacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CremacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
