import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() initialValue: number;
  @Input() inputTitle: string;
  @Output() FormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  reactiveForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = this.fb.group({ value: [this.initialValue] });
  }

  send() {
    const inputValue = this.reactiveForm.get('value');
    if (inputValue) {
      this.FormGroupChange.emit(inputValue.value);
    }
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
