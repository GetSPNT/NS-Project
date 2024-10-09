import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)},
  {path: 'forgetpassword', loadComponent: () => import('./auth/forgetpassword/forgetpassword.component').then(c => c.ForgetpasswordComponent)},
  {path: 'changepassword', loadComponent: () => import('./auth/changepassword/changepassword.component').then(c => c.ChangepasswordComponent)},
  {path: 'setting', loadComponent: () => import('./view/setting/setting.component').then(c => c.SettingComponent)},
  {path: 'createschduling', loadComponent: () => import('./view/create-schedule/create-schedule.component').then(c => c.CreateScheduleComponent)}
];
