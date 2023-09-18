import { Peca } from '../models/Peca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable(
  // {   providedIn: 'root'}
  )
export class PecaService {
  baseURL = 'https://localhost:5001/api/Pecas';

constructor(private http: HttpClient){ }

public getPecas(): Observable<Peca[]>{
  return this.http
  .get<Peca[]>(this.baseURL)
  .pipe(take(1));
}

public getPecasById(id: number): Observable<Peca>{
  return this.http
  .get<Peca>(`${this.baseURL}/${id}`)
  .pipe(take(1));
}
public post(peca: Peca): Observable<Peca>{
  return this.http
  .post<Peca>(this.baseURL, peca)
  .pipe(take(1));
}

public put(peca: Peca): Observable<Peca>{
  return this.http
  .put<Peca>(`${this.baseURL}/${peca.id}`, peca)
  .pipe(take(1));
}
public deletePeca(id: number): Observable<any>{
  return this.http
  .delete(`${this.baseURL}/${id}`)
  .pipe(take(1));
}

}
