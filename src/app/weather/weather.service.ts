import {Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

    constructor(private http: Http) {

    }

    getWeatherByQuery(lat, lon) {
      return this.http.get('http://api.apixu.com/v1/current.json?key=172933db26de44c6a8c204259170510&q='+lat+','+lon)
     .map((res:Response) => res.json())
     }
}
