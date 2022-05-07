import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor(private http: HttpClient) {}

  //Retrieves login credentials from the web
  GetLoginData(): Observable<any> {
    return this.http.get(
      'https://jsonblob.com/api/jsonblob/972493843345981440'
    );
  }
}
