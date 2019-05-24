import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;
  majors : any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    console.log('[DashboardComponent][onLoad]');
    this.data.getStudentInfo().subscribe(user => {
      this.user = user;
    });
    this.data.getStudentMajors().subscribe(majors => {
      this.majors = majors;
    });
  }

}
