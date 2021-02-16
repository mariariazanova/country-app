import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Country } from '../country';
import { FieldsNames } from '../constants/fields-names';
import { CountriesInfoService } from '../countriesInfo.service';
import { startWith } from 'rxjs/operators';

let fieldTitle = 'Happiness index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  countries: Country[] = [];
  value: number | string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesInfoService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  title = fieldTitle;
  country = this.countryService.countryName;

  ngOnInit(): void {
    this.initForm();
    this.countryService.getCountriesInfo().subscribe((result) => {
      this.countries = result;
    });
  }

  initForm() {
    this.findValue();
    this.reactiveForm = this.fb.group({ value: [this.value] });
  }

  findValue() {
    let countryObjectInfo: {
      [index: string]: any;
    } = this.countryService.arrayAdditionalCountryInfo.find((country) =>
      Object.keys(country).includes(this.countryService.countryName),
    ) || { [this.countryService.countryName]: '' };
    this.value = countryObjectInfo[this.countryService.countryName];
  }

  send() {
    const inputValue = this.reactiveForm.get('value');
    if (inputValue) {
      inputValue.valueChanges.pipe(startWith(this.reactiveForm.value)).subscribe((value) => {
        this.value = value.value;
        this.countryService.value = value.value;
        let countryObjectInfo: {
          [index: string]: any;
        } = this.countryService.arrayAdditionalCountryInfo.find((country) =>
          Object.keys(country).includes(this.countryService.countryName),
        ) || { [this.countryService.countryName]: '' };
        countryObjectInfo[this.countryService.countryName] = this.value;
        this.countryService.arrayAdditionalCountryInfo.push({
          [this.countryService.countryName]: value.value,
        });
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
