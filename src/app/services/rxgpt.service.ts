import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxGPTService {

  @Inject(String) apiUrl1 = 'https://c36ffa559b4d.ngrok-free.app/webhook/34435af0-2f7e-473d-b377-840a088747cf?query=hello';
  @Inject(String) apiUrl = 'https://f549df4876a4.ngrok-free.app/webhook/1c18ae2f-d191-487c-a873-9a0357c28b55?name=sanjeeb';

  rxGptQuery!: string;
  constructor( private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

   getDataWithCustomHeader(healthcareQuery: string)  {
      //  const headers = new HttpHeaders({'Content-Type':'application/json;'});
      // return this.http.get<any[]>(this.apiUrl, { headers: headers });

      let params = new HttpParams();
      params = params.append('query', healthcareQuery);
      // params = params.append('var2', val2);

      return this.http.get(this.apiUrl, {params: params});

      // return this.http.get<any[]>(this.apiUrl);
  }

  postDataWithContentType() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { name: 'Angular', version: 18 };

    return this.http.post('your-api-endpoint', body, { headers: headers });
  }


}