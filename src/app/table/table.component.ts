import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  countries: Country[];
  searchTerm: any;
  filteredCountries: Country[];

  constructor(private countryService: CountriesInfoService) {}

  ngOnInit(): void {
    this.countryService.getCountriesInfo().subscribe((countries: Country[] = []) => {
      this.countries = countries;
      this.filteredCountries = countries;
    });
  }

  search(): void {
    let term = this.searchTerm;
    this.filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().startsWith(term),
    );
  }
}
