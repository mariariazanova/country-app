import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from './countriesInfo.service';
import { TitlesNames } from './constants/titles-names';

import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesInfoService],
})
export class AppComponent {
  country: Country | null;
  countries: Country[] = [];

  title = TitlesNames.appTitle;

  constructor(private httpService: CountriesInfoService) {
    this.countries = [];
  }
}
