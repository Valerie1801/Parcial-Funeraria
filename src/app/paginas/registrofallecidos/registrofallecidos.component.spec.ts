import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrofallecidosComponent } from './registrofallecidos.component';

describe('RegistrofallecidosComponent', () => {
  let component: RegistrofallecidosComponent;
  let fixture: ComponentFixture<RegistrofallecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrofallecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrofallecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
