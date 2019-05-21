import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { CleanComponent } from './layout/clean/clean.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { KardexComponent } from '@components/kardex/kardex.component';
import { ScheduleComponent } from '@components/schedule/schedule.component';
import { AttendanceComponent } from '@components/attendance/attendance.component';

const routes: Routes = [
  { path: '',   redirectTo: 'sega', pathMatch: 'full' },
  { path: '', component: CleanComponent, children:[
    { path: 'login', component: LoginComponent },
  ] },
  { path: '', component: MainComponent,  children:[
    { path: 'sega', component: DashboardComponent, canActivate : [AuthGuardService] },
    { path: 'kardex', component: KardexComponent, canActivate: [AuthGuardService] },
    { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
    { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
