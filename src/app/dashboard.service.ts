import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getActivityData(): Observable<any> {
    return this.http.get('api/activity')
      .switchMap(response => Observable.of(response.json().data));
  }

  getTotalIncomeData(): Observable<any> {
    return this.http.get('api/total_income')
      .switchMap(response => Observable.of(response.json().data));
  }

  getTodayIncomeData(): Observable<any> {
    return this.http.get('api/day_income')
      .switchMap(response => Observable.of(response.json().data));
  }

  getViewsData(): Observable<any> {
    return this.http.get('api/views')
      .switchMap(response => Observable.of(response.json().data));
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.create(null, error.message || error);
  }

}
