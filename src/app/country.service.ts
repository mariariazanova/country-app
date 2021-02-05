import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './fixtures/country-data';

const topQuantity = 3;

@Injectable()
export class CountryService {
  constructor() {}

  getCountries(): Country[] {
    return COUNTRIES;
  }

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
