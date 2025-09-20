import { TestBed } from '@angular/core/testing';
import { GoogleLoginService } from './google-login';

describe('GoogleLogin', () => {
  let service: GoogleLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
