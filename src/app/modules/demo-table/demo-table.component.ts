import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, switchMap, tap, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { fromFetch } from 'rxjs/fetch';
import {MatPaginator} from '@angular/material/paginator';

// YAHAN INTERFACE BANANA HAI---------------------------------------------------------
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
let resultLength=0
export interface studentdata {
  ID: string;
  Name: string;
  Rollno: string;
  address: string;
}

let meradata: studentdata[] = [];
// YAHAN API CALL KARKE DATA MANNGWANA HAI-------------------------------------------
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})


export class DemoTableComponent implements OnInit {
  displayedColumns1: string[] = ['ID', 'Name', 'Rollno', 'address'];
  // dataSource = new ExampleDataSource();
  dataSource2 = new ExampleDataSource2();

  constructor(private http: HttpClient) {
    const data = fromFetch('https://api.npoint.io/b0f185ebb4618e8bb0c6').pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      })
    );

    data.subscribe(res => {
      meradata = res
      this.dataSource2 = new ExampleDataSource2();
    })
  }
  ngOnInit(): void {
  }

}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }
  disconnect() { }
}

export class ExampleDataSource2 extends DataSource<studentdata> {

  data = new BehaviorSubject<studentdata[]>(meradata);
  connect(): Observable<studentdata[]> {
    return this.data;

  }
  disconnect() { }
}
