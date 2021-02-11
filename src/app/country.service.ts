import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './fixtures/country-data';
import { TitlesAndQuantities } from './fixtures/titles-and-quantities';
import { FieldsNames } from './fixtures/fields-names';

@Injectable()
export class CountryService {
  constructor() {}

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getTopCountries(array: any[], property: string) {
    return array
      .sort((a, b) => b[property] - a[property])
      .slice(0, TitlesAndQuantities.numberOfTopCountries);
  }

  getPopulatedCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, FieldsNames.countryInfoPopulation);
  }

  getLargestCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, FieldsNames.countryInfoArea);
  }

  getGiniCountries(): Country[] {
    return this.getTopCountries(COUNTRIES, FieldsNames.countryInfoGini);
  }

  getCountry(name: string): Country | null {
    return COUNTRIES.find((country) => country.name === name) || null;
  }
}
