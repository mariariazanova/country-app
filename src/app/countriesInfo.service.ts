import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from './country';

const topQuantity = 3;

const url = 'https://restcountries.eu/rest/v2/all';

@Injectable()
export class CountriesInfoService {
  
  constructor(private http: HttpClient) {}
/*
  getCountiresInfo2(): Observable<any> {
    return this.http.get(url);
  }
*/
  getCountriesInfo(): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      map( data => {
        return data.map( ( country ) => {
          return  {
            name: country['name'],
            capital: country['capital'],
            area: country['area'],
            population: country['population'],
            currency: country['currencies'][0].name,
            gini: country['gini'],
          } ;
        } );
      } ),
    );
  }

  COUNTRIES  = this.getCountriesInfo();

  getTopCountries(array: any[], property: string) {
    return array.sort((a, b) => b[property] - a[property]).slice(0, topQuantity);
  }

  getPopulatedCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'population');
  }

  getLargestCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'area');
  }

  getGiniCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'gini');
  }

  getCountry(name: string): Country | null {
    return COUNTRIES.find((country) => country.name === name) || null;
  }

}
