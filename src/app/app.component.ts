import { Component } from '@angular/core';

import { CountriesInfoService } from './countriesInfo.service';
import { Titles } from './constants/titles-names';
import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountriesInfoService],
})
export class AppComponent {
  country: Country | null;
  countries: Country[] = [];

  title = Titles.appTitle;

  constructor(private httpService: CountriesInfoService) {
    this.countries = [];
  }
}
