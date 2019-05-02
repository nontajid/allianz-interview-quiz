import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MainJoiner } from '../model/main-joiner';

@Injectable({
  providedIn: 'root'
})
export class MainjoinerService {
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private url = 'api/mainjoinner';

  constructor(
    private http: HttpClient) { }

  addMainJoiner(mainJoiner: MainJoiner): Observable<any> {
    return this.http.post(this.url, mainJoiner, this.httpOptions)
                    .pipe(
                      tap(_ => console.log('save Main Joinner')),
                      catchError( (err) => {
                        console.log(`func:addMainJoiner err:${err}`);
                        return of(err);
                      }));
  }

  updateMainJoiner(mainJoiner: MainJoiner): Observable<any> {
    return this.http.put(this.url, mainJoiner, this.httpOptions)
                    .pipe(
                      tap(_ => console.log('updateMainJoiner Main Joinner')),
                      catchError( (err) => {
                        console.log(`func:updateMainJoiner err:${err}`);
                        return of(err);
                      }));
  }
}
