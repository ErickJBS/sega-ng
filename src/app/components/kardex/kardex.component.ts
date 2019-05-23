import { Component, OnInit } from '@angular/core';
import { Kardex } from '@models/kardex';

export interface Classifier {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: Kardex[] = [
  {student_id:'a311012', semester: 1, subject_id: 'ISAD', grade: 7.97},
  {student_id:'a311012', semester: 2, subject_id: 'SDAS', grade: 8.68},
  {student_id:'a311012', semester: 3, subject_id: 'ASD de Datos', grade: 9.67}
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

  displayedColumns: string[] = ['student_id','semester', 'subject_id', 'grade'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}
