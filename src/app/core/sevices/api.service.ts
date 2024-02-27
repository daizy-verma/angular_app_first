import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://93.188.167.68:9696/api/';

  constructor(private http: HttpClient) { }
  
  registerAPI(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users/create`, data);
  }

  loginAPI(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users/login`, data);
  }

}
