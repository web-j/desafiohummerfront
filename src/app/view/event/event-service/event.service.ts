import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { Event } from '../event-model/event.model';

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

  public getOne(id: any): Observable<any> {
    const url = this.BASE_URL + id;
    return this.http.get(url);
  }

  public save(data: Event): Observable<any> {
    const url = this.BASE_URL;
    return this.http.post(url, data);
  }

  public update(data: Event): Observable<any> {
    const url = this.BASE_URL;
    return this.http.put(url, data);
  }

  public closedEvent(data: Event): Observable<any> {
    const url = this.BASE_URL + 'closedEvent';
    return this.http.put(url, data);
  }

  public GetAllEventsAvailable(): Observable<any> {
    const url = this.BASE_URL + 'getAllEventsAvailable';
    return this.http.get(url);
  }

  public getAllEventsUnavailable(): Observable<any> {
    const url = this.BASE_URL + 'getAllEventsUnavailable';
    return this.http.get(url);
  }
}
