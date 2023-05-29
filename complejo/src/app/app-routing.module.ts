import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'dashboard'
  },
  {
    path: 'login', 
    component: LoginPageComponent
  },
  {
    path: 'dashboard', 
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '', 
        component: HomePageComponent
      },
      {
        path: 'home', 
        component: HomePageComponent
      }
    ]
  },
  {
    path: '**', 
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
