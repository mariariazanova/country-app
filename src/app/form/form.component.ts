import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Country } from '../country';
import { FieldsNames } from '../constants/fields-names';
import { TitlesNames } from '../constants/titles-names';
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

  title = TitlesNames.addInputTitle;
  country = this.countryService.country?.name;

  ngOnInit(): void {
    this.initForm();
    this.countryService.getCountriesInfo().subscribe((result) => {
      this.countries = result;
    });
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
