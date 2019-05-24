import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@services/auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getStudentInfo() {
    return this.getRequest('student');
  }

  getStudentMajors() {
    return this.getRequest('majors');
  }

  getStudentKardex() {
    return this.getRequest('kardex');
  }

  getStudentSchedule() {
    return this.getRequest('schedule');
  }

  private getRequest(route: string) {
    const user = this.auth.getUser();
    const url = `${environment.apiServer}/${route}`;
    return this.http.get<any>(url, {
      params: {
        id: user
      }
    });
  }

}
