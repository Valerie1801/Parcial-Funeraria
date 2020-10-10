import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcapComponent } from './imgcap.component';

describe('ImgcapComponent', () => {
  let component: ImgcapComponent;
  let fixture: ComponentFixture<ImgcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
