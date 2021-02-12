import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountriesInfoService } from './countriesInfo.service';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FormComponent } from './form/form.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailComponent,
    FormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CountriesInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
