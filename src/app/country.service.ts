import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './fixtures/country-data';
import { GlobalConstants } from './fixtures/global-constants';
import { ConstantsFieldsNames } from './fixtures/constants-fields-names';

@Injectable()
export class CountryService {
  constructor() {}

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getTopCountries(array: any[], property: string) {
    return array
      .sort((a, b) => b[property] - a[property])
      .slice(0, GlobalConstants.numberOfTopCountries);
  }

  getPopulatedCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, ConstantsFieldsNames.countryInfoPopulation);
  }

  getLargestCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, ConstantsFieldsNames.countryInfoArea);
  }

  getGiniCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, ConstantsFieldsNames.countryInfoGini);
  }

  getCountry(name: string): Country | null {
    return COUNTRIES.find((country) => country.name === name) || null;
  }
}
