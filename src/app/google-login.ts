import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any; 

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  constructor(private router: Router) {}

  initGoogleLogin() {
    // ตรวจสอบว่า gapi ถูกโหลดแล้วก่อนใช้งาน
    if (typeof gapi !== 'undefined') {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: '166816161692-h1324uj6m1av8k5otfdhqi1ko5jsl5gt.apps.googleusercontent.com',  // เปลี่ยนด้วย Google Client ID ของคุณ
        });
      });
    } else {
      console.error('gapi is not loaded');
    }
  }

  signIn() {
    if (typeof gapi !== 'undefined') {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then((googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log('Google ID Token:', id_token);

        // คุณสามารถส่ง id_token นี้ไปยัง server ของคุณเพื่อตรวจสอบและเซ็นชื่อ
        this.router.navigate(['/home']);  // หลังจาก login สำเร็จให้ไปที่หน้า Home
      }).catch((error: any) => {
        console.error('Google Sign-In error', error);
      });
    } else {
      console.error('gapi is not loaded');
    }
  }

  signOut() {
    if (typeof gapi !== 'undefined') {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        console.log('User signed out.');
      });
    } else {
      console.error('gapi is not loaded');
    }
  }
}
