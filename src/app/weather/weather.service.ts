import {Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

    constructor(private http: Http) {

    }

    getWeatherByQuery() {
       let headers = new Headers();
       headers.append('Access-Control-Allow-Origin', '*');
      return this.http.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1',
      )
     .map((res:Response) => res.json())
     }
}
