import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  api = 'http://localhost:8000/api';
  username: string;
  fullname: string;
  firstname: string;
  lastname: string;
  transactions: any;

  private allMembers: any;

  constructor(private http: HttpClient) {}

  // Returns all members
  getTransactions() {
    return this.http
      .get(`${this.api}/transactions`)
      .pipe(catchError(this.handleError));
  }

  setUsername(name: string): void {
    this.username = name;
  }

  setFullName(fname: string, lname: string) {
    this.fullname = fname + ' ' + lname;
    console.log('FULL NAME: ' + this.fullname);
  }

  getFullname(userid: number): string {
    console.log('Incoming USERID: ', userid);
    return this.fullname;
  }

  addTransaction(transactionForm: any) {
    const pathToURL = `${this.api}/addMember`;
    const self = this;
    console.log('New Transaction to add!: ', transactionForm);

    // return this.http
    //   .post(pathToURL, memberForm)
    //   .pipe(catchError(this.handleError));

    // let data = JSON.stringify(memberForm);
    const data = transactionForm;

    console.log('DATA GOING IN: ', data);

    return new Promise((resolve, reject) => {
      this.http.post<Object>(pathToURL, data).subscribe(
        (response: any) => {
          console.log(
            'Post SUCCESS Add Transaction Message Response: ',
            response
          );
          resolve(response);
        },
        (error: any) => {
          console.error('Post New Transactions Message Error: ', error);
          reject(error);
          self.handleError(error);
        }
      );
    });
  }

  getTransactions() {
    return this.http
      .get(`${this.api}/transactions`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any[] {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}
