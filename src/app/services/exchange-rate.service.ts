import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRateRequest } from '../classes/exchangeRateRequest';
import { Injectable } from '@angular/core';
import { ExchangeRateResponse } from '../classes/exchangeRateResponse';

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService {

    private URL_SERVER = 'http://127.0.0.1:8080';
    private HTTP_OPTIONS = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjcHVsYWNoZXY4IiwiaWF0IjoxNTk0MjY3Mzc5LCJleHAiOjE1OTQ1MjYzNzl9.HYw3AoWaYqRIRNSLa86Pa9IaapK4ADxpta4DYkxFu3Blphk8ofVEPwWXLVrbT07GsfFVjYtOxFfHH59ruhRZZw'
        })
      };

    constructor(private httpClient: HttpClient) {}

    convert(exchangeRateRequest: ExchangeRateRequest): Observable<ExchangeRateResponse> {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.post<ExchangeRateResponse>(`${this.URL_SERVER}/api/exchange-rates/converter`, exchangeRateRequest, this.HTTP_OPTIONS);
    }

    getCurrencies(): Observable<string[]> {
      // tslint:disable-next-line:max-line-length
      return this.httpClient.get<string[]>(`${this.URL_SERVER}/api/exchange-rates/currencies`, this.HTTP_OPTIONS);
    }
}
