import { Component, OnInit } from '@angular/core';
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
export class FormComponent {
  // reactiveForm: FormGroup;
  // country: Country | null;
  // countries: Country[];

  value: number;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesInfoService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  title = fieldTitle;
 // reactiveForm: FormGroup;
  reactiveForm = this.fb.group({ value: [''] });

/*
  ngOnInit(): void {
    this.initForm;
  }


  initForm() {
    this.reactiveForm = this.fb.group({ value: [''] });
  }
*/
  send() {
    //  this.index = this.reactiveForm.value;
    console.log(this.reactiveForm.value);
    const inputValue = this.reactiveForm.get('value');
    console.log(inputValue);
    if (inputValue) {
      inputValue.valueChanges.pipe(startWith(this.reactiveForm.value)).subscribe((value) => {
        // this.value = value;
        //   this.countryService.value = value;
        console.log(this.countryService.value);
        this.countryService.value = value.value;
        console.log(this.countryService.value);
      });
    }
  }
/*
  onSubmit() {
    console.log(this.reactiveForm.value);
    const inputValue = this.reactiveForm.get('value');
    console.log(inputValue);
    if (inputValue) {
      inputValue.valueChanges.pipe(startWith(this.reactiveForm.value)).subscribe((value) => {
       // this.value = value;
     //   this.countryService.value = value;
        console.log(this.countryService.value);
        this.countryService.value = value.value;
        console.log(this.countryService.value);
      });
    }
  }
*/
  goBack(): void {
    this.location.back();
  }
}
