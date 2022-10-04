import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private readonly serverUrl = environment.severUrl;
  constructor(private http: HttpClient) { }

  public AnalysisRequest(url: string): Observable<any> {
    const model = {
      "webUrl": url
    }

    return this.http.post(`${this.serverUrl}/api/v1/analyse`, model)
  }

  public GetReports(): Observable<any> {
    return this.http.get(`${this.serverUrl}/api/v1/analyse`)
  }
}
