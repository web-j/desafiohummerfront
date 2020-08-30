import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANT_URL } from '../../constant/constant-rest';
import { UserEvent } from '../model/user-event.model';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  BASE_URL = CONSTANT_URL.BASE_URL + CONSTANT_URL.USEREVENT;

  constructor(
    public http: HttpClient
  ) { }

  public save(data: UserEvent): Observable<any> {
    const url = this.BASE_URL;
    return this.http.post(url, data);
  }

  public update(data: UserEvent): Observable<any> {
    const url = this.BASE_URL;
    return this.http.put(url, data);
  }

  public delete(data: UserEvent): Observable<any> {
    const url = this.BASE_URL + 'delete';
    return this.http.put(url, data);
  }

}
