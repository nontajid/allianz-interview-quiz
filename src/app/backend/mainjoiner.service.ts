import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MainJoiner } from '../model/main-joiner';

@Injectable({
  providedIn: 'root'
})
export class MainjoinerService {
  private url = 'api/mainjoinner';

  constructor(
    private http: HttpClient) { }

  addMainJoiner(mainJoiner: MainJoiner): Observable<any> {
    return this.http.post(this.url, mainJoiner)
                    .pipe(
                      tap(_ => console.log('save Main Joinner')),
                      catchError( (err) => {
                        console.log(`func:addMainJoiner err:${err}`);
                        return of(err);
                      }));
  }
}
