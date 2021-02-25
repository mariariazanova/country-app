import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CountriesInfoService } from './countriesInfo.service';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FormComponent } from './form/form.component';
import { EditCountryDetailComponent } from './edit-country-detail/edit-country-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailComponent,
    FormComponent,
    EditCountryDetailComponent,
    MapComponent,
    TableComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZBg1YpHhafdlUJsiZuE_p-M42y_A38-U',
    }),
  ],
  providers: [CountriesInfoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
