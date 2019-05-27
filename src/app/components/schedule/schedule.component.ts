import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: any[];
  dailySchedule: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.data.getStudentSchedule().subscribe(schedule => {
      this.schedule = schedule;
      this.filterSchedule();
    });
  }

  filterSchedule() {
    for (let i = 1; i <= 7; i++) {
      const c = this.filterScheduleByDay(i);
      this.dailySchedule.push(c);
    }
  }

  filterScheduleByDay(day: number) {
    if (!this.schedule) return;
    return this.schedule.filter(item => item.day === day);
  }

  getColor(item: any) {
    const color = ['#70f54f', '#8308ca', '#fc6da8', '#3744f3', '#fffc3b', '#f88d29', '#ff4848'];
    return color[item.day];
  }

}
