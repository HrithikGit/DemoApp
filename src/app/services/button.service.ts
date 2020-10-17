import { Injectable } from '@angular/core';
import { Button } from '../shared/button';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  //ctype: string;
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getButtons(crimetype): Observable<Button[]> {
      //ctype: string =toString(crimetype);
   console.log(baseURL+crimetype);
    return this.http.get<Button[]>(baseURL+crimetype.toString())
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }


}
