import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from './countriesInfo.service';

import { Country } from './country';

let appTitle = 'Fun Facts About Countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesInfoService],
})
export class AppComponent {
  country: Country | null;
  countries: Country[] = [];

  title = appTitle;

  constructor(private httpService: CountriesInfoService) {
    this.countries = [];
  }
}
