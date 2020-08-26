import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANT_URL } from 'src/app/constant/constant-rest';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  BASE_URL = CONSTANT_URL.BASE_URL + CONSTANT_URL.EVENT;

  constructor(
    public http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    const url = this.BASE_URL;
    return this.http.get(url);
  }
}
