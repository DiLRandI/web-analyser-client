import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  public url = new FormControl()
  constructor(private analyse: AnalysisService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.analyse.AnalysisRequest(this.url.value).pipe(catchError(this.handleError)).subscribe(res => {
      console.log(res)
      this.url.setValue("")
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
