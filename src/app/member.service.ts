import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from './member';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const uri = 'http://localhost:8080/api/v1/members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${uri}`)
      .pipe(tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  getMember(id: number): Observable<any> {
    return this.http.get<Member>(`${uri}/${id}`)
      .pipe(tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  createMember(member: Member): Observable<Object> {
    return this.http.post<Member>(`${uri}`, member)
      .pipe(tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  updateMember(id: number, member: Member): Observable<Object> {
    return this.http.put<Member>(`${uri}/${id}`, member)
      .pipe(tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  deleteMember(id: number): Observable<Member[]> {
    return this.http.delete<Member[]>(`${uri}/${id}`)
      .pipe(tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
