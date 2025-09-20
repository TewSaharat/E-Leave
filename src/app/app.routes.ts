import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { Login } from './login/login';
import { HomePege } from './home-pege/home-pege';
import { NgModule } from '@angular/core';



export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: HomePege },  // กำหนดเส้นทางหน้า HomePage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // ใช้ RouterModule.forRoot สำหรับกำหนด routing
  exports: [RouterModule]
})
export class AppRoutingModule { }