import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './fixtures/country-data';

@Injectable()
export class CountryService {
  constructor() {}

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getTopCountries(array: any[], property: string) {
    return array.sort((a, b) => b[property] - a[property]).slice(0, 3);
  }

  getPopulatedCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'population');
  }

  getLargestCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'area');
  }

  getGDPCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, 'gdp');
  }

  getCountry(name: string): Country {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return COUNTRIES.find((country) => country.name === name)!;
  }
}
