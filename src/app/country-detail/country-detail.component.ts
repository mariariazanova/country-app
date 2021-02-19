import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../country';
import { FieldsNames } from '../constants/fields-names';
import { Titles } from '../country-detail/titles';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: Country | null;
  countries: Country[];
  fieldHappinessIndexTitle: string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesInfoService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.countryService.getCountriesInfo().subscribe((result) => {
      this.countries = result;
      this.setCountry();
      this.setInputValue();
    });
  }

  setCountry(): void {
    const name: string = this.route.snapshot.paramMap.get(FieldsNames.countryInfoName) || '';
    this.country = this.countryService.getCountry(this.countries, name);
    this.countryService.country = this.country;
  }

  setInputValue() {
    if (this.country) {
      this.countryService.getInputValue();
      this.country.happinessIndex = this.countryService.value;
      
      if (this.country.happinessIndex) {
        this.fieldHappinessIndexTitle = Titles.HappinessIndexInputTitle + ':';
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
