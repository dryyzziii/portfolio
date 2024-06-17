import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface EmailData {
  fullName: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: EmailData): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}
