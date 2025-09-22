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
  public googleLoginService: GoogleLoginService,   // 🔹 เปลี่ยนจาก private → public
  private router: Router
) {}



ngOnInit() {

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


}
