import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ENV } from "../../config/env";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url: string = ENV.API_URL;
  constructor(public http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {};
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.append(k, params[k]);
      }
    }
    return this.http.get(this.url + "/" + endpoint, reqOpts);
  }
  
  post(endpoint: string, params?: any, reqOpts?: any) {
    let body = new HttpParams();
    for (let k in params) {
      body = body.append(k, params[k]);
    }
    return this.http.post(this.url + "/" + endpoint, body, reqOpts);
  }

  delete(endpoint: string, params?: any, reqOpts?: any){
    return this.http.delete(this.url + "/" + endpoint);
  }
}
