import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from './country';

const url = 'https://restcountries.eu/rest/v2/all';

@Injectable()
export class CountriesInfoService {
  constructor(private http: HttpClient) {}

  getCountiresInfo(): Observable<Country[]> {
    return this.http.get(url).pipe(map((country) => {
            name: country.name;
            capital: country.capital;
            area: country.area;
            population: country.population;
            currency: country.currencies.name;
            gini: country.gini;
          }
        ));
    };
  }
}
