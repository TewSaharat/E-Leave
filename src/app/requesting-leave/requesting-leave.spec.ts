import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestingLeave } from './requesting-leave';

describe('RequestingLeave', () => {
  let component: RequestingLeave;
  let fixture: ComponentFixture<RequestingLeave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestingLeave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestingLeave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
