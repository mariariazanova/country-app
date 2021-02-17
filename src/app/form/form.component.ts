import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Country } from '../country';
import { Titles } from '../country-detail/titles';
import { CountriesInfoService } from '../countriesInfo.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  countries: Country[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesInfoService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  title = Titles.HappinessIndexInputTitle;
  country = this.countryService.country?.name;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.countryService.getInputValue();
    this.reactiveForm = this.fb.group({ value: [this.countryService.value] });
  }

  send() {
    const inputValue = this.reactiveForm.get('value');
    if (inputValue) {
      inputValue.valueChanges.pipe(startWith(inputValue)).subscribe((value) => {
        this.countryService.value = value.value;
        if (this.countryService.country) {
          this.countryService.additionalCountryInfo[
            this.countryService.country.name
          ] = this.countryService.value;
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
