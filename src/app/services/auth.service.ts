import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://localhost:44329/api/users/';

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const result = response;
        if (result) {
          // console.log(result.token);
          localStorage.setItem('token', result.token);
        }
      })
    );
  }
}
