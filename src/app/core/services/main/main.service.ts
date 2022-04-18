import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public API_URL = 'https://young-sands-07814.herokuapp.com/api/';


  constructor(public httpClient: HttpClient) {
  }

  // public async test() {
  //   try {
  //     let data = await this.get('products?limit=6&offset=1');
  //     console.log({data});

  //   } catch(err) {
  //     console.error('An ocuured an error', err);
  //   }
  // }

  public get(url: string) {
    return this.httpClient.get<any[]>(this.API_URL + url)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error('err request', err, err.status);
          return throwError(err);
        }),
        retry(3),
        map((productsP: any) => productsP.map((item: any) => {
          return {
            ...item,
            taxes: .19 * item.price
          }
        })
        ))
      .toPromise()
  }
}
