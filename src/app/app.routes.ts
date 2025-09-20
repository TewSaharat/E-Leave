import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { Login } from './login/login';
import { HomePege } from './home-pege/home-pege';
import { NgModule } from '@angular/core';
import { Profile } from './profile/profile';



export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: HomePege },  // กำหนดเส้นทางหน้า HomePage
  { path: 'Profile', component: Profile },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }