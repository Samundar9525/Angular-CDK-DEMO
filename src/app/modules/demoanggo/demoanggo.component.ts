import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-demoanggo',
  templateUrl: './demoanggo.component.html',
  styleUrls: ['./demoanggo.component.css']
})
export class DemoanggoComponent implements OnInit {
  items :any;
  expandedIndex = 0;
  constructor() { }

  ngOnInit(): void {


    const data$ = fromFetch('https://api.npoint.io/f08cb87f1a40739840be').pipe(
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

    data$.subscribe({
      next: result => {this.items=result;console.log(result)},
      complete: () => console.log('done')
    });

  }

}
