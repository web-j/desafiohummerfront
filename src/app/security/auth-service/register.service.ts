import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANT_URL } from '../../constant/constant-rest';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BASE_URL = CONSTANT_URL.BASE_URL + CONSTANT_URL.PARTICIPANT;

  constructor(public http: HttpClient) { }

  public save(data: any): Observable<any> {
    const url = this.BASE_URL;
    return this.http.post(url, data);
  }

}
