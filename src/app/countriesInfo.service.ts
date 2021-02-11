import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalConstants } from './fixtures/global-constants';
import { ConstantsFieldsNames } from './fixtures/constants-fields-names';
import { UrlConstants } from './fixtures/url-constants';
import { Country } from './country';

@Injectable()
export class CountriesInfoService {
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountriesInfo(): Observable<Country[]> {
    return this.http.get<Country[]>(UrlConstants.url).pipe(
      map((data) => {
        return data.map((country) => {
          return {
            name: country['name'],
            capital: country['capital'],
            area: country['area'],
            population: country['population'],
            currency: country['currencies'].map((el: { name: string }) => el.name).join(', '),
            gini: country['gini'],
            flag: country['flag'],
            language: country['languages'].map((el: { name: string }) => el.name).join(', '),
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
    return this.getTopCountries(array, ConstantsFieldsNames.countryInfoPopulation);
  }

  getLargestCountries(array: Country[]) {
    return this.getTopCountries(array, ConstantsFieldsNames.countryInfoArea);
  }

  getGiniCountries(array: Country[]) {
    return this.getTopCountries(array, ConstantsFieldsNames.countryInfoGini);
  }

  getCountry(array: Country[], name: string): Country | null {
    return array.find((country) => country.name === name) || null;
  }
}
