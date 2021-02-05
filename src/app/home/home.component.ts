import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  populatedCountries: Country[] = [];
  largestCountries: Country[] = [];
  giniCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGiniCountries();
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries();
  }

  setLargestCountries(): void {
    this.largestCountries = this.countryService.getLargestCountries();
  }

  setGiniCountries(): void {
    this.giniCountries = this.countryService.getGiniCountries();
  }
}
