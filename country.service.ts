import { Injectable } from '@angular/core';
import { CountryModule } from './models/country/country.module';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient: HttpClient) {}

  getCountries():Observable<CountryModule[]>{
    return this._httpClient.get<CountryModule[]>('https://restcountries.eu/rest/v2/all');
  }


  getSearchByCountryName(searchValue:string):Observable<CountryModule[]>{
    console.log('Entered1::'+searchValue);
    return this._httpClient.get<CountryModule[]>('https://restcountries.eu/rest/v2/name/'+searchValue);
  }

}
