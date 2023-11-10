import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string = environment.api;

  constructor(private http:HttpClient) { }

  get(query : string){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA335fGNXGTSIpINzt5NlR-u4N-0Zn613IsOgiN6q8kTbwtMSm9BV8NjFxpbBiduiB02vDU3nVz78_MB2w'
    });

    return this.http.get(`${this.baseUrl}${query}`, {headers});
  }

  post(query : string, payload:any){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA335fGNXGTSIpINzt5NlR-u4N-0Zn613IsOgiN6q8kTbwtMSm9BV8NjFxpbBiduiB02vDU3nVz78_MB2w'
    });
    console.log(`${this.baseUrl}${query}`);
    console.log(payload);
    return this.http.post(`${this.baseUrl}${query}`, payload, {headers});
  }
}
