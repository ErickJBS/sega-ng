import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

/*export interface Classifier {
  value: string;
  viewValue: string;
}*/

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

  kardex: any[];
  average: any;
  displayedColumns: string[] = ['semester', 'subject_name', 'grade'];

  /*classifiers: Classifier[] = [
    { value: 'semester-0', viewValue: 'Semestre' },
    { value: 'grade-1', viewValue: 'Calificacion' },
    { value: 'subject-2', viewValue: 'Materia' }
  ];*/

  constructor(private data: DataService) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    console.log('[KardexComponent][onLoad]');
    this.data.getStudentKardex().subscribe(kardex => {
      this.kardex = kardex;
      this.average = this.getAverage();
    });
  }

  getAverage(): number {
    if (!this.kardex) return;
    let sum = 0;
    for (let i of this.kardex) {
      sum += i.grade;
    }
    return sum / this.kardex.length;
  }

}
