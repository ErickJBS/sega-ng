import { Component, OnInit } from '@angular/core';

export interface Classifier {
  value: string;
  viewValue: string;
}

export interface Kardex{
  semester: number;
  name: string;
  grade: number;
}

const ELEMENT_DATA: Kardex[] = [
  {semester: 1, name: 'Algortimo', grade: 7.97},
  {semester: 2, name: 'Cálculo', grade: 8.68},
  {semester: 3, name: 'Estructura de Datos', grade: 9.67}
];

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

  classifiers: Classifier[] = [
    {value: 'semester-0', viewValue: 'Semestre'},
    {value: 'grade-1', viewValue: 'Calificacion'},
    {value: 'subject-2', viewValue: 'Materia'}
  ];

  displayedColumns: string[] = ['semester', 'name', 'grade'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}
