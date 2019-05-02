import { Injectable } from '@angular/core';
import { Joiner } from '../model/joiner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JoinerService {
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private url = 'api/joiner';

  constructor(
    private http: HttpClient
  ) { }

  addJoiner(joiner: Joiner): Observable<any> {
    return this.http.post(this.url, joiner)
                    .pipe(
                      tap(_ => console.log('added joiner')),
                      catchError((err) => {
                        console.log(`func:addJoiner err:${err}`);
                        return of(err);
                      }));
  }

  updateJoiner (joiner: Joiner): Observable<any> {
    return this.http.put(this.url, joiner, this.httpOptions).pipe(
      tap(_ => console.log(`updateJoiner with id ${joiner.id}`)),
      catchError(err => {
        console.log(`func:updateJoiner error update ${joiner.id} with ${err}`);
        return err;
      })
    );
  }
  
  deleteJoiner (joiner: Joiner): Observable<any> {
    return this.http.delete(`${this.url}/${joiner.id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleteJoiner with id ${joiner.id}`)),
      catchError(err => {
        console.log(`func:deleteJoiner error update ${joiner.id} with ${err}`);
        return err;
      })
    );
  }  
}
