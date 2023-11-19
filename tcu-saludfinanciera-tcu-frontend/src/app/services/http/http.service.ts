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
    return this.http.get(`${this.baseUrl}${query}`);
  }

  post(query : string, payload:any){
    console.log(`${this.baseUrl}${query}`);
    console.log(payload);
    return this.http.post(`${this.baseUrl}${query}`, payload);
  }
}
