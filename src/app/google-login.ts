import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  constructor(private router: Router) {}

  initGoogleLogin() {
    if (typeof gapi !== 'undefined') {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: 'xxxxx.apps.googleusercontent.com',
        });
      });
    }
  }

  signIn() {   // ✅ มีอยู่นะ
    if (typeof gapi !== 'undefined') {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then((googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log('Google ID Token:', id_token);

        this.router.navigate(['/home']);
      }).catch((error: any) => {
        console.error('Google Sign-In error', error);
      });
    }
  }
}
