import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { Country } from '../country';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CountriesInfoService],
})
export class HomeComponent implements OnInit {
  populatedCountries: Country[] = [];
  largestCountries: Country[] = [];
  giniCountries: Country[] = [];
  arrayAdditionalCountryInfo: object[];
  countries: Country[] = [];

  constructor(private countryService: CountriesInfoService) {}

  ngOnInit(): void {
    this.countryService.getCountriesInfo().subscribe((result) => {
      this.countries = result;
      this.setPopulatedCountries();
      this.setLargestCountries();
      this.setGiniCountries();
    });
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries(this.countries);
  }

  setLargestCountries(): void {
    this.largestCountries = this.countryService.getLargestCountries(this.countries);
  }

  setGiniCountries(): void {
    this.giniCountries = this.countryService.getGiniCountries(this.countries);
  }
}
