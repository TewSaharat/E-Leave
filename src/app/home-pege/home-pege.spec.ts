import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePege } from './home-pege';

describe('HomePege', () => {
  let component: HomePege;
  let fixture: ComponentFixture<HomePege>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePege]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePege);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
