import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAppointComponent } from './day-appoint.component';

describe('DayAppointComponent', () => {
  let component: DayAppointComponent;
  let fixture: ComponentFixture<DayAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayAppointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
