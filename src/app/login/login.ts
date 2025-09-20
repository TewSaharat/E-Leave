import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';  // นำเข้า Router
import { GoogleLoginService } from '../google-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  
  templateUrl: './login.html',
  styleUrls: ['./login.css']  
})
export class Login implements OnInit {
  username = '';
  password = '';
  loginError = false;

  // เพิ่ม Router ในคอนสตรัคเตอร์
  constructor(
    private googleLoginService: GoogleLoginService,
    private router: Router  
  ) {}

  ngOnInit() {
    this.googleLoginService.initGoogleLogin(); 
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('เข้าสู่ระบบสำเร็จ!');
      this.loginError = false;
      this.router.navigate(['/home']);  
    } else {
      this.loginError = true;
    }
  }

  // เรียกใช้บริการ Google Login
  signInWithGoogle() {
    this.googleLoginService.signIn(); 
  }
}
