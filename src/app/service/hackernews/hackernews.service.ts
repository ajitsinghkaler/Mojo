import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor(public http:HttpClient) { }

  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
                    .map(response => response.json());
  }
}
