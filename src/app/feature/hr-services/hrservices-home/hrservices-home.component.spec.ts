import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrservicesHomeComponent } from './hrservices-home.component';

describe('HrservicesHomeComponent', () => {
  let component: HrservicesHomeComponent;
  let fixture: ComponentFixture<HrservicesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrservicesHomeComponent]
    });
    fixture = TestBed.createComponent(HrservicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
