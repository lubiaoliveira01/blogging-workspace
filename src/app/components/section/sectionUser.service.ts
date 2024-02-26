import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISectionUser } from './sectionUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionUserService {

  private readonly API = 'http://localhost:8000/rawPost'

  constructor(private http: HttpClient) { }

  getSectionUser(): Observable<ISectionUser[]> {
    return this.http.get<ISectionUser[]>(this.API)
  }

}
