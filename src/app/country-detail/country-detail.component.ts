import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../country';
import { CountriesInfoService } from '../countriesInfo.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: Country | null;
  countries: Country[];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesInfoService,
    private location: Location,
  ) {}

  ngOnInit(): void {
   // this.getCountry();
    this.countryService.getCountriesInfo().subscribe((result) => {
      (this.countries = result), this.getCountry();
    });
  }

  getCountry(): void {
    const name: string = this.route.snapshot.paramMap.get('name') || '';
    this.country = this.countryService.getCountry(this.countries, name);
  }

  goBack(): void {
    this.location.back();
  }
}
