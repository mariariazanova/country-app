import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country';

enum countableProperties {
  area,
  population,
  gini,
  happinessIndex,
}

@Pipe({ name: 'findLevel' })
export class FindlevelPipe implements PipeTransform {
  transform(countries: Country[], country: Country | null, property: string): any {
    if (country && property in countableProperties)
      return (
        countries
          .sort((a, b) => b[property] - a[property])
          .findIndex((el: { name: string }) => el.name === country.name) + 1
      );
  }
}
