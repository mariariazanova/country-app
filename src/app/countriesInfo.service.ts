import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FieldsNames } from './constants/fields-names';
import { UrlConstants } from './constants/url-constants';
import { Country } from './country';

let numberOfTopCountries = 5;

@Injectable()
export class CountriesInfoService {
  countries: Country[] = [];
  country: Country | null;
  countryName: string | '';
  value: number;
  arrayAdditionalCountryInfo: object[] = [];

  constructor(private http: HttpClient) {}

  getCountriesInfo(): Observable<Country[]> {
    return this.http.get<Country[]>(UrlConstants.url).pipe(
      map((data) => {
        return data.map((country) => {
          return {
            name: country.name,
            capital: country.capital,
            area: country.area,
            population: country.population,
            currency: this.getDataFromObject(country.currencies, 'currency'),
            gini: country.gini,
            flag: country.flag,
            language: this.getDataFromObject(country.languages, 'language'),
          };
        });
      }),
    );
  }

  getDataFromObject(array: any[], typeOfData: string) {
    return array.map((typeOfData: { name: string }) => typeOfData.name).join(', ');
  }

  getTopCountries(array: any[], property: string) {
    return array.sort((a, b) => b[property] - a[property]).slice(0, numberOfTopCountries);
  }

  getPopulatedCountries(array: Country[]) {
    return this.getTopCountries(array, FieldsNames.countryInfoPopulation);
  }

  getLargestCountries(array: Country[]) {
    return this.getTopCountries(array, FieldsNames.countryInfoArea);
  }

  getGiniCountries(array: Country[]) {
    return this.getTopCountries(array, FieldsNames.countryInfoGini);
  }

  getCountry(array: Country[], name: string): Country | null {
    return array.find((country) => country.name === name) || null;
  }
}
