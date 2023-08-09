import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicesHomeComponent } from './admin-services-home.component';

describe('AdminServicesHomeComponent', () => {
  let component: AdminServicesHomeComponent;
  let fixture: ComponentFixture<AdminServicesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminServicesHomeComponent]
    });
    fixture = TestBed.createComponent(AdminServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
