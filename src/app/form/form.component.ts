import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Country } from '../country';
import { FieldsNames } from '../constants/fields-names';
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

  title = FieldsNames.countryHappinessIndex;
  country = this.countryService.country?.name;

  ngOnInit(): void {
    this.initForm();
    this.countryService.getCountriesInfo().subscribe((result) => {
      this.countries = result;
    });
  }

  initForm() {
    this.setValue();
    this.reactiveForm = this.fb.group({ value: [this.countryService.value] });
  }

  setValue() {
    this.countryService.value = this.countryService.getInputValue(true);
  }

  send() {
    const inputValue = this.reactiveForm.get('value');
    if (inputValue) {
      inputValue.valueChanges.pipe(startWith(inputValue)).subscribe((value) => {
        this.countryService.value = value.value;
        if (this.countryService.country) {
          this.countryService.getInputValue(false);
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
