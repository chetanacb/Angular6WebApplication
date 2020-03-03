import { Component, OnInit } from '@angular/core';
import { CountryModule } from '../models/country/country.module';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  countries:CountryModule[];
  searchTerm:string;
  _filteredCountriesList:CountryModule[];
  countryList:CountryModule[];

  
  constructor(private _countryService:CountryService,private _rouetr:Router) { }

  ngOnInit() {
    //Select all contry method
    this._countryService.getCountries()
                          .subscribe((countriesData) => this.countries=countriesData);

  }

  onCountrySelected(searchCountry:any){
      console.log("value:"+searchCountry)
    this._countryService.getSearchByCountryName(searchCountry)
         .subscribe((countriesData) => this.countryList=countriesData)
  }

  onClick(countryName:string){
    this._rouetr.navigate(['/contry', countryName]);
  }
  

}
 
