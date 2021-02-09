import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
})
export class AllCountriesComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountriesInfoService) {}

  ngOnInit(): void {
    this.countryService
      .getCountriesInfo()
      .subscribe((countries: Country[] = []) => (this.countries = countries));
  }
}
