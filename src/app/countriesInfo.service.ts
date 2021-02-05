import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'https://restcountries.eu/rest/v2/all';

@Injectable()
export class CountriesInfoService {
  constructor(private http: HttpClient) {}

  getCountiresInfo(): Observable<any> {
    return this.http.get(url);
  }
}
