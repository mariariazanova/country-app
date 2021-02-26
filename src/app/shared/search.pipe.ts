import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(countries: Country[], searchText: string): any {
    if (searchText == null) return countries;
    return countries.filter((country) => country.name.toLowerCase().startsWith(searchText));
  }
}
