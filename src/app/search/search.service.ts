import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
  clientID: string = '6ae46081d16248049dc18cef71115c2a';
  baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
  accessToken: string = 'BQAs2iZ2n1oHVLU0BN2pt9HosTPDMtoh4T9DSFH4O-k7NCL3i20RZ8NhUfxccuuyRLpgJ8ogft1QMsE99tk2NgBYPy9S9iRaS5PveoWRQy8FId4JV-buqm5_lqn1S3Ei_Jn0PU7eT8JdU6rOd89TshzRCep1OcfEq6ttt678kmZ11JU';
  constructor(private _http: Http) { }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
     this.accessToken); 
  }
  //search method which call http method to call builds api and pass the payload.
  search(queryString: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let _URL = this.baseUrl + queryString;
    return this._http.get(_URL, {
      headers: headers
    });
  }
}