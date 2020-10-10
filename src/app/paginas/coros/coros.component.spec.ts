import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosComponent } from './coros.component';

describe('CorosComponent', () => {
  let component: CorosComponent;
  let fixture: ComponentFixture<CorosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
