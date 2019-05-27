import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

  kardex: any[];
  average: any;
  dataSource: MatTableDataSource<{}>;
  displayedColumns: string[] = ['semester', 'subject_name', 'grade'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.data.getStudentKardex().subscribe(kardex => {
      this.kardex = kardex;
      this.average = this.getAverage();
      this.dataSource = new MatTableDataSource(this.kardex);
      this.dataSource.sort = this.sort
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
