import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from './country';

const topQuantity = 3;

const url = 'https://restcountries.eu/rest/v2/all';

@Injectable()
export class CountriesInfoService {
  // private countries: Observable<Country[]> = this.getCountriesInfo();

  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountriesInfo(): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      map((data) => {
        return data.map((country) => {
          return {
            name: country['name'],
            capital: country['capital'],
            area: country['area'],
            population: country['population'],
            currency: country['currencies'][0].name,
            gini: country['gini'],
            flag: country['flag'],
            languages: Object.values(country['languages'])
              .map((el) => Object.values(el).filter((el, index) => index == 2))
              .toString(),
          };
        });
      }),
    );
  }

  getTopCountries(array: any[], property: string) {
    return array.sort((a, b) => b[property] - a[property]).slice(0, topQuantity);
  }

  getPopulatedCountries(array: Country[]) {
    return this.getTopCountries(array, 'population');
  }

  getLargestCountries(array: Country[]) {
    return this.getTopCountries(array, 'area');
  }

  getGiniCountries(array: Country[]) {
    return this.getTopCountries(array, 'gini');
  }

  getCountry(array: Country[], name: string): Country | null {
    return array.find((country) => country.name === name) || null;
  }
}
