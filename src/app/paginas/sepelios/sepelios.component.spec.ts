import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepeliosComponent } from './sepelios.component';

describe('SepeliosComponent', () => {
  let component: SepeliosComponent;
  let fixture: ComponentFixture<SepeliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepeliosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepeliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
