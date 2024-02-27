import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SectionUser } from '../utils/types';

const PATH = 'rawPost'

@Injectable({
  providedIn: 'root',
})
export class SectionService {

  constructor(private http: HttpClient) {}

  getSection(): Observable<SectionUser[]> {
    return this.http.get<SectionUser[]>(`${environment.API_URL}/${PATH}`);
  }
}
