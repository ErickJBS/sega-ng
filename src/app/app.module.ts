import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleanComponent } from './layout/clean/clean.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';
import { MenuComponent } from './layout/main/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTabsModule, MatSidenavModule } from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KardexComponent } from './components/kardex/kardex.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    CleanComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    DashboardComponent,
    KardexComponent,
    ScheduleComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
