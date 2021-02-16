import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../country';
import { FieldsNames } from '../constants/fields-names';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: Country | null;
  countries: Country[];
  fieldTitle: string;
  value: number | string;

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
    this.countryService.countryName = name;
  }

  setInputValue() {
    const countryObjectInfo = this.countryService.arrayAdditionalCountryInfo
      .reverse()
      .find((country) => Object.keys(country).includes(this.countryService.countryName));

    if (countryObjectInfo) {
      this.value = Object.values(countryObjectInfo).toString();
      console.log(this.value);
    }

    if (this.value) {
      this.fieldTitle = 'Happiness index :';
    }
    this.countryService.arrayAdditionalCountryInfo.reverse();
  }

  goBack(): void {
    this.location.back();
  }
}
