import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from './countriesInfo.service';

import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesInfoService],
})
export class AppComponent implements OnInit {
  country: Country | null;
 // countries: Country[] = [];

  title = 'Fun Facts About Countries';

  constructor(private httpService: CountriesInfoService) {}

  ngOnInit(): void {
 /*   this.httpService.getCountiresInfo2().subscribe((data) => {
      this.countries = data; 
      console.log(data);  
      console.log(this.countries); 
    });*/
    this.httpService.getCountriesInfo().subscribe((data) => console.log(data)); //(this.countries = data));
  }
}
