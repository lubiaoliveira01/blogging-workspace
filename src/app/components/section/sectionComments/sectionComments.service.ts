import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISectionUser } from '../sectionInterface';

@Injectable({
  providedIn: 'root',
})
export class SectionCommentsService {
  private readonly API = 'http://localhost:3000/rawPost';

  constructor(private http: HttpClient) {}

  getSectionComments(): Observable<ISectionUser[]> {
    return this.http.get<ISectionUser[]>(this.API)
  }
}
