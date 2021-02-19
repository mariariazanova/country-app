import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() countryName: string | undefined;
  @Input() initialValue: number;
  @Input() inputTitle: string;
  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  reactiveForm: FormGroup;

  constructor(
    private countryService: CountriesInfoService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = this.fb.group({ value: [this.initialValue] });
  }

  send() {
    const inputValue = this.reactiveForm.get('value');
    if (inputValue) {
      this.onFormGroupChange.emit(inputValue.value);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
