import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JdrDqdService {
  private baseUrl = 'http://localhost:3000/api'; // <-- vers ton serveur local

  constructor(private http: HttpClient) {}

  getRaces(): Observable<any> {
    return this.http.get(`${this.baseUrl}/races`);
  }

  getClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/classes`);
  }

  getRace(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/races/${id}`);
  }

  getClasse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/classes/${id}`);
  }
}
