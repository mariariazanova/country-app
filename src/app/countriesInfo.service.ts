import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalConstants } from './fixtures/global-constants';
import { Country } from './country';

@Injectable()
export class CountriesInfoService {
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountriesInfo(): Observable<Country[]> {
    return this.http.get<Country[]>(GlobalConstants.URL).pipe(
      map((data) => {
        return data.map((country) => {
          const indexName = Object.keys(Object.values(country['languages'])[0]).indexOf('name');
          return {
            name: country['name'],
            capital: country['capital'],
            area: country['area'],
            population: country['population'],
            currency: country['currencies'][0].name,
            gini: country['gini'],
            flag: country['flag'],
            languages: Object.values(country['languages'])
              .map((el) => Object.values(el).filter((el, index) => index == indexName))
              .join(','),
          };
        });
      }),
    );
  }

  getTopCountries(array: any[], property: string) {
    return array
      .sort((a, b) => b[property] - a[property])
      .slice(0, GlobalConstants.numberOfTopCountries);
  }

  getPopulatedCountries(array: Country[]) {
    return this.getTopCountries(array, GlobalConstants.countryInfoPopulation);
  }

  getLargestCountries(array: Country[]) {
    return this.getTopCountries(array, GlobalConstants.countryInfoArea);
  }

  getGiniCountries(array: Country[]) {
    return this.getTopCountries(array, GlobalConstants.countryInfoGini);
  }

  getCountry(array: Country[], name: string): Country | null {
    return array.find((country) => country.name === name) || null;
  }
}
