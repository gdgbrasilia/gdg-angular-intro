import {Routes} from '@angular/router';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ChatroomComponent} from './chatroom/chatroom.component';

export const appRouters: Routes = [
  {path: 'signup', component: SignupFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'chat', component: ChatroomComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
