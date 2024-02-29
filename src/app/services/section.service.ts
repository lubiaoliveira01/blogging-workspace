import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SectionComments, SectionUser } from '../utils/rawPostTypes';
import { User } from '../utils/userTypes';

const PATH = 'rawPost'
const PATHUser = 'users'

@Injectable({
  providedIn: 'root',
})
export class SectionService {

  constructor(private http: HttpClient) {}

  getSection(): Observable<SectionUser[]> {
    return this.http.get<SectionUser[]>(`${environment.API_URL}/${PATH}`);
  }

  patchSectionComments(id: number, comments: SectionComments): Observable<SectionUser[]> {
    return this.http.patch<SectionUser[]>(`${environment.API_URL}/${PATH}/${id}`, comments);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/${PATHUser}/${id}`);
  }
}
