import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { CleanComponent } from './layout/clean/clean.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',   redirectTo: 'sega', pathMatch: 'full' },
  { path: '', component: CleanComponent, children:[
    { path: 'login', component: LoginComponent },
  ] },
  { path: '', component: MainComponent,  children:[
    { path: 'sega', component: DashboardComponent, canActivate : [AuthGuardService] },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
