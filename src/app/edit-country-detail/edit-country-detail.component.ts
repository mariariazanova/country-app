import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Country } from '../country';
import { CountriesInfoService } from '../countriesInfo.service';
import { Titles } from '../country-detail/titles';

@Component({
  selector: 'app-edit-country-detail',
  templateUrl: './edit-country-detail.component.html',
  styleUrls: ['./edit-country-detail.component.scss'],
})
export class EditCountryDetailComponent {
  @Output() initialValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() inputTitle: EventEmitter<string> = new EventEmitter<string>();

  constructor(private countryService: CountriesInfoService, private location: Location) {}

  country: Country | null = this.countryService.country;
  value: number = this.countryService.value;
  fieldTitle: string = Titles.HappinessIndexInputTitle;

  formGroupChangeEvent(value: any) {
    this.countryService.value = value;
    if (this.countryService.country) {
      this.countryService.additionalCountryInfo[
        this.countryService.country.name
      ] = this.countryService.value;
    }
  }
}
