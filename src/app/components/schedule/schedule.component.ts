import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  classroom: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  mondays: Section[] = [
    {
      name: 'Sistemas Operativos',
      classroom: 'SA - LC2',
    },
    {
      name: 'Base de Datos',
      classroom: 'SA - LC4',
    },
    {
      name: 'Inglés III',
      classroom: 'SA - 39',
    }
  ];
  tuesdays: Section[] = [
    {
      name: 'Álgebra',
      classroom: 'SA - 39',
    },
    {
      name: 'Cálculo',
      classroom: 'SA - 39',
    }
  ];
  wednesdays: Section[] = [
    {
      name: 'Química',
      classroom: 'SA - 39',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
