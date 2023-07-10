import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';

const routes: Routes = [
  {path:'userLogin', component: UserLoginComponent},
  {path:'userSignup', component: UserSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
