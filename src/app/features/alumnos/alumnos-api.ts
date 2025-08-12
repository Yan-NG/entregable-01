import { Injectable } from '@angular/core';
import { Student } from '../../../shared/entities';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosApi {
  baseUrl = "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) { }
  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`).pipe(delay(1000));
  }

  getAlumnosWithMockAPI(): Observable<Student[]> {
    return this.http.get<Student[]>(`https://646bb5717d3c1cae4ce42faa.mockapi.io/`).pipe(delay(1000));
  }


  deleteAlumno(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${student.dni}`).pipe(delay(1000));
  }
}
